import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import type { Page } from "../App";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import type { Counselor } from "../types/appTypes";

interface Props {
  navigate: (p: Page) => void;
}

export function CounselorsPage({ navigate }: Props) {
  const { actor } = useActor();
  const { identity } = useInternetIdentity();
  const qc = useQueryClient();
  const [search, setSearch] = useState("");
  const [assigning, setAssigning] = useState<bigint | null>(null);

  const { data: counselors, isLoading } = useQuery<Counselor[]>({
    queryKey: ["counselors"],
    queryFn: () => actor!.listCounselors(),
    enabled: !!actor,
  });

  const assignMutation = useMutation({
    mutationFn: async (id: bigint) => {
      // Auto-register if no student profile exists yet
      try {
        await actor!.getMyProfile();
      } catch {
        const principalStr = identity?.getPrincipal().toText() ?? "Student";
        const shortId = principalStr.slice(0, 8);
        await actor!.registerStudent(
          `Student ${shortId}`,
          `${shortId}@mindcare.app`,
        );
      }
      await actor!.assignCounselor(id);
    },
    onSuccess: () => {
      toast.success(
        "Counselor assigned! Go to your dashboard to start chatting.",
      );
      qc.invalidateQueries({ queryKey: ["assignment"] });
      qc.invalidateQueries({ queryKey: ["my-profile"] });
    },
    onError: (err: unknown) => {
      const msg = err instanceof Error ? err.message : String(err);
      toast.error(`Failed to assign counselor: ${msg}`);
    },
  });

  const filtered = (counselors ?? []).filter(
    (c) =>
      c.isActive &&
      (c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.specialty.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#111] mb-2">
          Find Your Counselor
        </h1>
        <p className="text-[#7A7A7A]">
          Browse our qualified professionals and choose someone you feel
          comfortable with.
        </p>
      </div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-5 py-3 border border-[#E9E6E2] rounded-full text-sm focus:outline-none focus:border-[#C04444] transition-colors bg-white"
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl h-80 animate-pulse border border-[#E9E6E2]"
            />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-[#7A7A7A]">
          <p className="text-lg">No counselors found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <CounselorCard
              key={c.id.toString()}
              counselor={c}
              isLoggedIn={!!identity}
              isAssigning={assigning === c.id && assignMutation.isPending}
              onAssign={() => {
                if (!identity) {
                  navigate("login");
                  return;
                }
                setAssigning(c.id);
                assignMutation.mutate(c.id);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CounselorCard({
  counselor,
  isAssigning,
  onAssign,
}: {
  counselor: Counselor;
  isLoggedIn: boolean;
  isAssigning: boolean;
  onAssign: () => void;
}) {
  const photo =
    counselor.photoUrl ||
    `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(counselor.name)}`;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E9E6E2] hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div className="aspect-[4/3] bg-[#F2D8D8] overflow-hidden">
        <img
          src={photo}
          alt={counselor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-bold text-[#111] text-lg">{counselor.name}</h3>
          <div className="flex items-center gap-0.5 text-yellow-400">
            ★ <span className="text-xs text-[#7A7A7A] ml-0.5">4.9</span>
          </div>
        </div>
        <p className="text-sm text-[#C04444] font-semibold mb-2">
          {counselor.specialty}
        </p>
        <p className="text-sm text-[#3A3A3A] mb-3 line-clamp-3">
          {counselor.bio}
        </p>
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-[#7A7A7A]">
            {counselor.availability}
          </span>
        </div>
        <button
          type="button"
          onClick={onAssign}
          disabled={isAssigning}
          className="w-full py-2 text-sm font-semibold bg-[#C04444] text-white rounded-full hover:bg-[#A03535] transition-colors disabled:opacity-60"
        >
          {isAssigning ? "Assigning..." : "Choose Counselor"}
        </button>
      </div>
    </div>
  );
}
