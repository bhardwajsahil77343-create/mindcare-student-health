import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { Page } from "../App";
import type { CheckupReminder, Counselor } from "../backend";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface Props {
  navigate: (p: Page) => void;
}

function daysUntil(nanos: bigint): number {
  const ms = Number(nanos) / 1_000_000;
  const diff = ms - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function DashboardPage({ navigate }: Props) {
  const { actor } = useActor();
  const { identity } = useInternetIdentity();
  const qc = useQueryClient();

  const { data: profile } = useQuery({
    queryKey: ["my-profile"],
    queryFn: () => actor!.getMyProfile(),
    enabled: !!actor && !!identity,
  });

  const { data: assignmentId } = useQuery<bigint | null>({
    queryKey: ["assignment"],
    queryFn: () => actor!.getMyAssignment(),
    enabled: !!actor && !!identity,
  });

  const { data: counselor } = useQuery<Counselor>({
    queryKey: ["counselor", assignmentId?.toString()],
    queryFn: () => actor!.getCounselor(assignmentId!),
    enabled: !!actor && !!assignmentId,
  });

  const { data: reminder } = useQuery<CheckupReminder>({
    queryKey: ["reminder"],
    queryFn: () => actor!.getMyReminder(),
    enabled: !!actor && !!identity,
  });

  const checkupMutation = useMutation({
    mutationFn: () => actor!.setLastCheckup(BigInt(Date.now()) * 1_000_000n),
    onSuccess: () => {
      toast.success("Checkup recorded! Your next reminder is in 90 days.");
      qc.invalidateQueries({ queryKey: ["reminder"] });
    },
  });

  if (!identity) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#111] mb-4">
          Please sign in to view your dashboard
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

  const daysLeft = reminder ? daysUntil(reminder.nextDueDate) : null;
  const isOverdue = daysLeft !== null && daysLeft <= 0;
  const isDueSoon = daysLeft !== null && daysLeft > 0 && daysLeft <= 14;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#111]">
          Welcome back{profile?.name ? `, ${profile.name}` : ""}!
        </h1>
        <p className="text-[#7A7A7A] mt-1">Here's your wellness overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Counselor card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E9E6E2]">
          <h3 className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-wide mb-4">
            Your Counselor
          </h3>
          {counselor ? (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F2D8D8] overflow-hidden">
                  <img
                    src={
                      counselor.photoUrl ||
                      `https://api.dicebear.com/7.x/personas/svg?seed=${encodeURIComponent(counselor.name)}`
                    }
                    alt={counselor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#111]">{counselor.name}</p>
                  <p className="text-xs text-[#C04444]">
                    {counselor.specialty}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#7A7A7A] mb-4">
                {counselor.availability}
              </p>
              <button
                type="button"
                onClick={() => navigate("chat")}
                className="w-full py-2.5 bg-[#C04444] text-white text-sm font-semibold rounded-full hover:bg-[#A03535] transition-colors"
              >
                Open Chat
              </button>
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-sm text-[#7A7A7A] mb-4">
                No counselor assigned yet.
              </p>
              <button
                type="button"
                onClick={() => navigate("counselors")}
                className="px-4 py-2 bg-[#F6E6E6] text-[#C04444] text-sm font-semibold rounded-full hover:bg-[#F2D8D8] transition-colors"
              >
                Browse Counselors
              </button>
            </div>
          )}
        </div>

        {/* Checkup reminder */}
        <div
          className={`bg-white rounded-2xl p-6 shadow-sm border ${
            isOverdue
              ? "border-red-300 bg-red-50"
              : isDueSoon
                ? "border-yellow-300 bg-yellow-50"
                : "border-[#E9E6E2]"
          }`}
        >
          <h3 className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-wide mb-4">
            Health Checkup
          </h3>
          {reminder && reminder.lastCheckupDate > 0n ? (
            <div>
              {isOverdue ? (
                <div className="mb-4">
                  <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                    ⚠ Overdue
                  </span>
                  <p className="text-sm text-red-700">
                    Your 3-month checkup is overdue. Please schedule one soon.
                  </p>
                </div>
              ) : isDueSoon ? (
                <div className="mb-4">
                  <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                    Due Soon
                  </span>
                  <p className="text-sm text-yellow-700">
                    {daysLeft} days until your next checkup.
                  </p>
                </div>
              ) : (
                <div className="mb-4">
                  <p className="text-3xl font-bold text-[#C04444]">
                    {daysLeft} days
                  </p>
                  <p className="text-xs text-[#7A7A7A] mt-1">
                    until your next checkup
                  </p>
                </div>
              )}
              <div className="h-2 bg-[#F2D8D8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C04444] rounded-full transition-all"
                  style={{
                    width: `${Math.max(0, Math.min(100, 100 - (daysLeft! / 90) * 100))}%`,
                  }}
                />
              </div>
              <button
                type="button"
                onClick={() => checkupMutation.mutate()}
                disabled={checkupMutation.isPending}
                className="mt-4 w-full py-2 text-xs font-semibold border border-[#C04444] text-[#C04444] rounded-full hover:bg-[#F6E6E6] transition-colors disabled:opacity-60"
              >
                {checkupMutation.isPending
                  ? "Recording..."
                  : "Record Checkup Today"}
              </button>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-sm text-[#7A7A7A] mb-4">
                No checkup on record. Set your first checkup to start the
                reminder.
              </p>
              <button
                type="button"
                onClick={() => checkupMutation.mutate()}
                disabled={checkupMutation.isPending}
                className="px-4 py-2 bg-[#C04444] text-white text-sm font-semibold rounded-full hover:bg-[#A03535] transition-colors disabled:opacity-60"
              >
                {checkupMutation.isPending ? "Setting..." : "Set Checkup Today"}
              </button>
            </div>
          )}
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E9E6E2]">
          <h3 className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-wide mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => navigate("chat")}
              className="w-full py-3 px-4 flex items-center gap-3 rounded-xl bg-[#FDF5F5] hover:bg-[#F6E6E6] transition-colors text-left"
            >
              <span className="text-xl">💬</span>
              <div>
                <p className="text-sm font-semibold text-[#111]">Open Chat</p>
                <p className="text-xs text-[#7A7A7A]">Message your counselor</p>
              </div>
            </button>
            <button
              type="button"
              onClick={() => navigate("counselors")}
              className="w-full py-3 px-4 flex items-center gap-3 rounded-xl bg-[#FDF5F5] hover:bg-[#F6E6E6] transition-colors text-left"
            >
              <span className="text-xl">👤</span>
              <div>
                <p className="text-sm font-semibold text-[#111]">
                  Browse Counselors
                </p>
                <p className="text-xs text-[#7A7A7A]">Find someone new</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
