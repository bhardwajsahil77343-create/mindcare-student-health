import { Heart } from "lucide-react";
import type { Page } from "../App";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface NavbarProps {
  page: Page;
  navigate: (p: Page) => void;
}

export function Navbar({ page, navigate }: NavbarProps) {
  const { identity, login, clear, isInitializing } = useInternetIdentity();
  const isLoggedIn = !!identity;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E9E6E2] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => navigate("home")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-[#C04444] flex items-center justify-center">
            <Heart className="w-4 h-4 text-white fill-white" />
          </div>
          <div>
            <span className="font-bold text-[#111] text-lg">MindCare</span>
            <span className="text-xs text-[#7A7A7A] ml-1">
              Student Wellness
            </span>
          </div>
        </button>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-5">
          {(
            [
              ["home", "Home"],
              ["counselors", "Counselors"],
              ["dashboard", "Dashboard"],
              ["chat", "Chat"],
              ["ai-chat", "AI Chat"],
              ["admin", "Admin"],
              ["project-report", "📄 Report"],
            ] as [Page, string][]
          ).map(([p, label]) => (
            <button
              type="button"
              key={p}
              data-ocid={`nav.${p.replace("-", "_")}.link`}
              onClick={() => navigate(p)}
              className={`text-sm font-medium transition-colors ${
                page === p
                  ? "text-[#C04444]"
                  : "text-[#3A3A3A] hover:text-[#C04444]"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          {isInitializing ? (
            <div className="w-24 h-9 bg-gray-100 rounded-full animate-pulse" />
          ) : isLoggedIn ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F2D8D8] flex items-center justify-center text-[#C04444] font-bold text-sm">
                S
              </div>
              <button
                type="button"
                onClick={clear}
                className="text-sm text-[#7A7A7A] hover:text-[#C04444] transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={() => navigate("login")}
                className="px-4 py-2 text-sm font-medium text-[#C04444] border border-[#C04444] rounded-full hover:bg-[#F6E6E6] transition-colors"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={login}
                className="px-4 py-2 text-sm font-medium text-white bg-[#C04444] rounded-full hover:bg-[#A03535] transition-colors shadow-sm"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
