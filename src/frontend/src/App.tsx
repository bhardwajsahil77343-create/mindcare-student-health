import { Github, Heart, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Toaster } from "./components/ui/sonner";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import { AIChatbotPage } from "./pages/AIChatbotPage";
import { AdminPage } from "./pages/AdminPage";
import { ChatPage } from "./pages/ChatPage";
import { CounselorsPage } from "./pages/CounselorsPage";
import { DashboardPage } from "./pages/DashboardPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export type Page =
  | "home"
  | "counselors"
  | "dashboard"
  | "chat"
  | "ai-chat"
  | "admin"
  | "login"
  | "register";

function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#C04444] flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-bold text-lg">MindCare</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Supporting college students' mental health with professional
              counselors and AI-powered assistance.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Modern Group of Colleges &middot; 2023–2027
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {(
                [
                  ["home", "Home"],
                  ["counselors", "Find Counselors"],
                  ["dashboard", "Dashboard"],
                  ["ai-chat", "AI Chat"],
                ] as [Page, string][]
              ).map(([p, label]) => (
                <li key={p}>
                  <button
                    type="button"
                    onClick={() => navigate(p)}
                    className="text-sm text-gray-400 hover:text-[#E87070] transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Crisis Support */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Crisis Support
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C04444]" />
                <div>
                  <p className="text-sm font-medium">
                    988 Suicide &amp; Crisis Lifeline
                  </p>
                  <p className="text-xs text-gray-400">
                    Call or text 988 anytime
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C04444]" />
                <div>
                  <p className="text-sm font-medium">iCall</p>
                  <p className="text-xs text-gray-400">
                    9152987821 &middot; Free counseling
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-[#C04444]" />
                <a
                  href="https://github.com/bhardwajsahil77343-create/mindcare-student-health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#E87070] transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; 2025 MindCare &middot; Built by Alisha (2326268) &middot;
            Modern Group of Colleges
          </p>
          <p className="text-xs text-gray-600">
            Powered by Internet Computer Protocol
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const { identity } = useInternetIdentity();

  const navigate = (p: Page) => {
    if ((p === "dashboard" || p === "chat" || p === "admin") && !identity) {
      setPage("login");
    } else {
      setPage(p);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans flex flex-col">
      <Navbar page={page} navigate={navigate} />
      <main className="flex-1">
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "counselors" && <CounselorsPage navigate={navigate} />}
        {page === "dashboard" && <DashboardPage navigate={navigate} />}
        {page === "chat" && <ChatPage navigate={navigate} />}
        {page === "ai-chat" && <AIChatbotPage navigate={navigate} />}
        {page === "admin" && <AdminPage navigate={navigate} />}
        {page === "login" && <LoginPage navigate={navigate} />}
        {page === "register" && <RegisterPage navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
      <Toaster richColors />
    </div>
  );
}
