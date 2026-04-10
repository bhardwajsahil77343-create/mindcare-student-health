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

const EMPTY_FORM: Omit<Counselor, "id"> = {
  name: "",
  specialty: "",
  bio: "",
  availability: "",
  photoUrl: "",
  isActive: true,
};

export function AdminPage({ navigate }: Props) {
  const { actor } = useActor();
  const { identity } = useInternetIdentity();
  const qc = useQueryClient();
  const [form, setForm] = useState<Omit<Counselor, "id">>(EMPTY_FORM);
  const [editing, setEditing] = useState<bigint | null>(null);
  const [showForm, setShowForm] = useState(false);

  useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: () => actor!.isCallerAdmin(),
    enabled: !!actor && !!identity,
  });

  const { data: counselors, isLoading } = useQuery<Counselor[]>({
    queryKey: ["counselors"],
    queryFn: () => actor!.listCounselors(),
    enabled: !!actor,
  });

  const addMutation = useMutation({
    mutationFn: (c: Counselor) => actor!.addCounselor(c),
    onSuccess: () => {
      toast.success("Counselor added!");
      qc.invalidateQueries({ queryKey: ["counselors"] });
      setForm(EMPTY_FORM);
      setShowForm(false);
    },
    onError: () => toast.error("Failed to add counselor."),
  });

  const updateMutation = useMutation({
    mutationFn: (c: Counselor) => actor!.updateCounselor(c),
    onSuccess: () => {
      toast.success("Counselor updated!");
      qc.invalidateQueries({ queryKey: ["counselors"] });
      setForm(EMPTY_FORM);
      setEditing(null);
      setShowForm(false);
    },
    onError: () => toast.error("Failed to update."),
  });

  const removeMutation = useMutation({
    mutationFn: (id: bigint) => actor!.removeCounselor(id),
    onSuccess: () => {
      toast.success("Counselor removed.");
      qc.invalidateQueries({ queryKey: ["counselors"] });
    },
    onError: () => toast.error("Failed to remove."),
  });

  const seedMutation = useMutation({
    mutationFn: () => actor!.seedSampleCounselors(),
    onSuccess: () => {
      toast.success("Sample counselors seeded!");
      qc.invalidateQueries({ queryKey: ["counselors"] });
    },
  });

  if (!identity) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#111] mb-4">
          Please sign in to access admin panel
        </h2>
        <button
          type="button"
          onClick={() => navigate("login")}
          className="px-8 py-3 bg-[#C04444] text-white rounded-full font-semibold hover:bg-[#A03535] transition-colors"
        >
          Sign In
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing !== null) {
      updateMutation.mutate({ ...form, id: editing });
    } else {
      addMutation.mutate({ ...form, id: 0n });
    }
  };

  const startEdit = (c: Counselor) => {
    setForm({
      name: c.name,
      specialty: c.specialty,
      bio: c.bio,
      availability: c.availability,
      photoUrl: c.photoUrl,
      isActive: c.isActive,
    });
    setEditing(c.id);
    setShowForm(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[#111]">Admin Panel</h1>
          <p className="text-[#7A7A7A] mt-1">
            Manage counselors and platform settings.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => seedMutation.mutate()}
            disabled={seedMutation.isPending}
            className="px-4 py-2 text-sm border border-[#E9E6E2] text-[#7A7A7A] rounded-full hover:border-[#C04444] hover:text-[#C04444] transition-colors disabled:opacity-60"
          >
            {seedMutation.isPending ? "Seeding..." : "Seed Sample Data"}
          </button>
          <button
            type="button"
            onClick={() => {
              setForm(EMPTY_FORM);
              setEditing(null);
              setShowForm(true);
            }}
            className="px-4 py-2 text-sm bg-[#C04444] text-white rounded-full hover:bg-[#A03535] transition-colors"
          >
            + Add Counselor
          </button>
        </div>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E9E6E2] mb-8">
          <h2 className="text-xl font-bold text-[#111] mb-6">
            {editing !== null ? "Edit Counselor" : "Add New Counselor"}
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {(
              [
                "name",
                "specialty",
                "availability",
                "photoUrl",
              ] as (keyof typeof form)[]
            ).map((field) => (
              <div key={String(field)}>
                <label
                  htmlFor={`field-${String(field)}`}
                  className="block text-sm font-medium text-[#3A3A3A] mb-1"
                >
                  {field === "photoUrl"
                    ? "Photo URL (optional)"
                    : String(field).charAt(0).toUpperCase() +
                      String(field).slice(1)}
                </label>
                <input
                  id={`field-${String(field)}`}
                  type={field === "photoUrl" ? "url" : "text"}
                  value={form[field] as string}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [field]: e.target.value }))
                  }
                  required={field !== "photoUrl"}
                  className="w-full px-4 py-2.5 border border-[#E9E6E2] rounded-xl text-sm focus:outline-none focus:border-[#C04444] transition-colors"
                />
              </div>
            ))}
            <div className="md:col-span-2">
              <label
                htmlFor="field-bio"
                className="block text-sm font-medium text-[#3A3A3A] mb-1"
              >
                Bio
              </label>
              <textarea
                id="field-bio"
                value={form.bio}
                onChange={(e) =>
                  setForm((f) => ({ ...f, bio: e.target.value }))
                }
                required
                rows={3}
                className="w-full px-4 py-2.5 border border-[#E9E6E2] rounded-xl text-sm focus:outline-none focus:border-[#C04444] transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2 flex gap-3">
              <button
                type="submit"
                disabled={addMutation.isPending || updateMutation.isPending}
                className="px-6 py-2.5 bg-[#C04444] text-white text-sm font-semibold rounded-full hover:bg-[#A03535] transition-colors disabled:opacity-60"
              >
                {addMutation.isPending || updateMutation.isPending
                  ? "Saving..."
                  : editing !== null
                    ? "Update"
                    : "Add Counselor"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditing(null);
                  setForm(EMPTY_FORM);
                }}
                className="px-6 py-2.5 border border-[#E9E6E2] text-[#7A7A7A] text-sm font-semibold rounded-full hover:border-[#C04444] transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-[#E9E6E2] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#E9E6E2]">
          <h2 className="font-bold text-[#111]">
            All Counselors ({counselors?.length ?? 0})
          </h2>
        </div>
        {isLoading ? (
          <div className="p-8 text-center text-[#7A7A7A]">Loading...</div>
        ) : counselors?.length === 0 ? (
          <div className="p-8 text-center text-[#7A7A7A]">
            No counselors yet. Add one or seed sample data.
          </div>
        ) : (
          <div className="divide-y divide-[#E9E6E2]">
            {counselors?.map((c) => (
              <div
                key={c.id.toString()}
                className="px-6 py-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#F2D8D8] overflow-hidden flex-shrink-0">
                  <img
                    src={
                      c.photoUrl ||
                      `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(c.name)}`
                    }
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#111] text-sm">{c.name}</p>
                  <p className="text-xs text-[#7A7A7A]">
                    {c.specialty} · {c.availability}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${c.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}
                >
                  {c.isActive ? "Active" : "Inactive"}
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => startEdit(c)}
                    className="px-3 py-1.5 text-xs font-medium border border-[#E9E6E2] rounded-full hover:border-[#C04444] hover:text-[#C04444] transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => removeMutation.mutate(c.id)}
                    disabled={removeMutation.isPending}
                    className="px-3 py-1.5 text-xs font-medium border border-red-200 text-red-500 rounded-full hover:bg-red-50 transition-colors disabled:opacity-60"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
