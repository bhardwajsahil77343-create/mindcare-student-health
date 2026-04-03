import { useMutation } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Page } from "../App";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface Props {
  navigate: (p: Page) => void;
}

export function RegisterPage({ navigate }: Props) {
  const { identity, login, isLoggingIn } = useInternetIdentity();
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const registerMutation = useMutation({
    mutationFn: () => actor!.registerStudent(name, email),
    onSuccess: () => {
      toast.success("Profile created! Welcome to MindCare.");
      navigate("counselors");
    },
    onError: () => toast.error("Failed to create profile."),
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-[#E9E6E2] p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#C04444] flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#111]">Create Account</h1>
          <p className="text-[#7A7A7A] mt-1">
            Join MindCare and find your support
          </p>
        </div>

        {!identity ? (
          <div className="bg-[#FDF5F5] rounded-2xl p-6 text-center">
            <p className="text-sm text-[#3A3A3A] mb-4">
              First, sign in with Internet Identity to create your secure
              account.
            </p>
            <button
              type="button"
              onClick={login}
              disabled={isLoggingIn}
              className="w-full py-3 bg-[#C04444] text-white font-semibold rounded-full hover:bg-[#A03535] transition-colors disabled:opacity-60"
            >
              {isLoggingIn ? "Opening login window..." : "Sign In to Continue"}
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              registerMutation.mutate();
            }}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="reg-name"
                className="block text-sm font-medium text-[#3A3A3A] mb-1"
              >
                Full Name
              </label>
              <input
                id="reg-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 border border-[#E9E6E2] rounded-xl text-sm focus:outline-none focus:border-[#C04444] transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="reg-email"
                className="block text-sm font-medium text-[#3A3A3A] mb-1"
              >
                Email Address
              </label>
              <input
                id="reg-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="student@university.edu"
                className="w-full px-4 py-3 border border-[#E9E6E2] rounded-xl text-sm focus:outline-none focus:border-[#C04444] transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={registerMutation.isPending || !name || !email}
              className="w-full py-3 bg-[#C04444] text-white font-semibold rounded-full hover:bg-[#A03535] transition-colors disabled:opacity-60"
            >
              {registerMutation.isPending
                ? "Creating account..."
                : "Create Account"}
            </button>
          </form>
        )}

        <div className="text-center mt-6">
          <p className="text-sm text-[#7A7A7A]">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("login")}
              className="text-[#C04444] font-medium hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
