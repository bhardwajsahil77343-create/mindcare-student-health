import { Heart } from "lucide-react";
import type { Page } from "../App";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface Props {
  navigate: (p: Page) => void;
}

export function LoginPage({ navigate }: Props) {
  const { login, isLoggingIn, identity } = useInternetIdentity();

  if (identity) {
    navigate("dashboard");
    return null;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-[#E9E6E2] p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#C04444] flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#111]">Welcome Back</h1>
          <p className="text-[#7A7A7A] mt-1">
            Sign in to your MindCare account
          </p>
        </div>

        <div className="bg-[#FDF5F5] rounded-2xl p-6 mb-6 text-center">
          <p className="text-sm text-[#3A3A3A] mb-4">
            MindCare uses <strong>Internet Identity</strong> — a secure,
            anonymous login system that protects your privacy. No passwords, no
            personal data stored.
          </p>
          <button
            type="button"
            onClick={login}
            disabled={isLoggingIn}
            className="w-full py-3 bg-[#C04444] text-white font-semibold rounded-full hover:bg-[#A03535] transition-colors disabled:opacity-60 shadow-sm"
          >
            {isLoggingIn
              ? "Opening login window..."
              : "Sign In with Internet Identity"}
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-[#7A7A7A]">
            New to MindCare?{" "}
            <button
              type="button"
              onClick={() => navigate("register")}
              className="text-[#C04444] font-medium hover:underline"
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
