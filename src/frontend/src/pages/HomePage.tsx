import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { Page } from "../App";
import { useActor } from "../hooks/useActor";
import type { Counselor } from "../types/appTypes";

interface Props {
  navigate: (p: Page) => void;
}

const TESTIMONIALS = [
  {
    name: "Alex M.",
    text: "MindCare helped me find the right counselor in minutes. I felt comfortable from the first session.",
    initials: "AM",
  },
  {
    name: "Priya K.",
    text: "The checkup reminders are a game changer. I used to forget my health appointments all the time.",
    initials: "PK",
  },
  {
    name: "Jordan L.",
    text: "Having direct chat with my counselor between sessions really helps me stay on track.",
    initials: "JL",
  },
];

const SAMPLE_COUNSELORS: Counselor[] = [
  {
    id: 1n,
    name: "Dr. Sarah Chen",
    specialty: "Anxiety & Stress",
    bio: "Specializing in cognitive-behavioral therapy for college students.",
    availability: "Mon-Wed 9am-5pm",
    photoUrl: "",
    isActive: true,
  },
  {
    id: 2n,
    name: "Dr. Michael Ross",
    specialty: "Depression & Mood",
    bio: "10+ years helping students navigate academic pressure and life transitions.",
    availability: "Tue-Thu 10am-6pm",
    photoUrl: "",
    isActive: true,
  },
  {
    id: 3n,
    name: "Dr. Aisha Patel",
    specialty: "Relationships & Social",
    bio: "Expert in social anxiety, loneliness, and building healthy connections.",
    availability: "Wed-Fri 8am-4pm",
    photoUrl: "",
    isActive: true,
  },
];

export function HomePage({ navigate }: Props) {
  const { actor } = useActor();
  const { data: counselors } = useQuery<Counselor[]>({
    queryKey: ["counselors"],
    queryFn: () => actor!.listCounselors(),
    enabled: !!actor,
  });

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#FDF5F5] via-[#F6E6E6] to-[#FAFAF8] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-12 w-32 h-32 rounded-full bg-[#F2D8D8]/60 animate-float" />
          <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-[#C04444]/10 animate-float-slow" />
          <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-[#F6E6E6] animate-float-medium" />
          <div className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-[#F2D8D8]/40 animate-float" />
          <div className="absolute top-1/2 left-2/3 w-10 h-10 rounded-full bg-[#C04444]/15 animate-float-slow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 bg-[#F6E6E6] text-[#C04444] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C04444] animate-pulse" />
              Free for college students
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#111] leading-tight mb-6">
              Your Mental
              <br />
              <span className="text-[#C04444]">Health Matters</span>
            </h1>
            <p className="text-lg text-[#3A3A3A] mb-8 leading-relaxed max-w-lg">
              Connect with professional counselors, get personalized support,
              and take control of your wellbeing — all from one place, on your
              schedule.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate("counselors")}
                className="px-8 py-3.5 bg-[#C04444] text-white font-semibold rounded-full hover:bg-[#A03535] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Counselors
              </button>
              <button
                type="button"
                onClick={() => navigate("dashboard")}
                className="px-8 py-3.5 border-2 border-[#C04444] text-[#C04444] font-semibold rounded-full hover:bg-[#F6E6E6] transition-all"
              >
                Go to Dashboard
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D"].map((l) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full bg-[#C04444]/80 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#7A7A7A]">
                <span className="font-bold text-[#111]">2,400+</span> students
                helped
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-sm mx-auto">
                <div className="absolute inset-0 bg-[#F2D8D8] rounded-3xl rotate-3" />
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-[#FDF5F5] rounded-2xl">
                      <div className="w-10 h-10 rounded-full bg-[#C04444] flex items-center justify-center text-white font-bold">
                        D
                      </div>
                      <div>
                        <p className="font-semibold text-[#111] text-sm">
                          Dr. Sarah Chen
                        </p>
                        <p className="text-xs text-[#7A7A7A]">
                          Anxiety & Stress
                        </p>
                      </div>
                      <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Available
                      </span>
                    </div>
                    <div className="p-4 bg-[#F6E6E6] rounded-2xl">
                      <p className="text-xs text-[#7A7A7A] mb-1">
                        Next checkup
                      </p>
                      <p className="font-bold text-[#C04444]">In 45 days</p>
                      <div className="mt-2 h-2 bg-white rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-[#C04444] rounded-full" />
                      </div>
                    </div>
                    <div className="p-4 bg-white border border-[#E9E6E2] rounded-2xl">
                      <p className="text-xs text-[#7A7A7A] mb-2">
                        Recent message
                      </p>
                      <p className="text-sm text-[#3A3A3A]">
                        &ldquo;How are you feeling today?&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Counselors */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#111]">
              Featured Counselors
            </h2>
            <p className="text-[#7A7A7A] mt-1">
              Qualified professionals ready to support you
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("counselors")}
            className="text-sm font-medium text-[#C04444] hover:underline"
          >
            View all →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(counselors?.slice(0, 3) ?? SAMPLE_COUNSELORS).map((c) => (
            <CounselorCard
              key={c.id.toString()}
              counselor={c}
              onChoose={() => navigate("counselors")}
            />
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-[#FDF5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#111]">
              Your Wellness Journey
            </h2>
            <p className="text-[#7A7A7A] mt-1">
              Everything you need in one dashboard
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E9E6E2]">
              <p className="text-xs text-[#7A7A7A] mb-2">Your Counselor</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F2D8D8] flex items-center justify-center text-[#C04444] font-bold text-xs">
                  D
                </div>
                <p className="text-sm font-semibold text-[#111]">Dr. Chen</p>
              </div>
              <span className="mt-2 inline-block text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E9E6E2] flex flex-col items-center">
              <p className="text-xs text-[#7A7A7A] mb-2">Wellness Score</p>
              <DonutChart value={82} />
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E9E6E2]">
              <p className="text-xs text-[#7A7A7A] mb-2">Resources</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["Mindfulness", "Time Mgmt", "Stress"].map((r) => (
                  <span
                    key={r}
                    className="text-xs bg-[#F6E6E6] text-[#C04444] px-2 py-0.5 rounded-full"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#E9E6E2]">
              <p className="text-xs text-[#7A7A7A] mb-2">Recent Chat</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#F2D8D8] flex-shrink-0" />
                <p className="text-xs text-[#3A3A3A] truncate">
                  How are you feeling today?
                </p>
              </div>
              <span className="mt-2 inline-block w-2 h-2 rounded-full bg-[#C04444]" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#111]">
            What Students Are Saying
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E9E6E2] relative pt-10"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-[#C04444] flex items-center justify-center text-white font-bold text-sm">
                {t.initials}
              </div>
              <p className="text-[#3A3A3A] text-sm leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-bold text-[#111] text-sm">{t.name}</p>
              <div className="flex gap-0.5 mt-1">
                <span className="text-yellow-400 text-xs">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#C04444]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join thousands of students who've found the support they needed.
            It's free and confidential.
          </p>
          <button
            type="button"
            onClick={() => navigate("counselors")}
            className="px-10 py-4 bg-white text-[#C04444] font-bold rounded-full hover:bg-[#F6E6E6] transition-all shadow-lg"
          >
            Find Your Counselor
          </button>
        </div>
      </section>
    </div>
  );
}

function CounselorCard({
  counselor,
  onChoose,
}: { counselor: Counselor; onChoose: () => void }) {
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
      <div className="p-5">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-bold text-[#111]">{counselor.name}</h3>
          <div className="flex items-center gap-0.5 text-yellow-400 text-xs">
            ★ <span className="text-[#7A7A7A]">4.9</span>
          </div>
        </div>
        <p className="text-sm text-[#C04444] font-medium mb-2">
          {counselor.specialty}
        </p>
        <p className="text-xs text-[#7A7A7A] mb-3 line-clamp-2">
          {counselor.bio}
        </p>
        <span className="inline-block text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full mb-4">
          {counselor.availability}
        </span>
        <button
          type="button"
          onClick={onChoose}
          className="w-full py-2 text-sm font-semibold border border-[#C04444] text-[#C04444] rounded-full hover:bg-[#F6E6E6] transition-colors"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}

function DonutChart({ value }: { value: number }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <div className="relative w-16 h-16">
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: has aria-label */}
      <svg
        viewBox="0 0 70 70"
        className="w-full h-full -rotate-90"
        aria-label={`Wellness score: ${value}%`}
      >
        <circle
          cx="35"
          cy="35"
          r={r}
          fill="none"
          stroke="#F2D8D8"
          strokeWidth="8"
        />
        <circle
          cx="35"
          cy="35"
          r={r}
          fill="none"
          stroke="#C04444"
          strokeWidth="8"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-[#C04444]">{value}%</span>
      </div>
    </div>
  );
}
