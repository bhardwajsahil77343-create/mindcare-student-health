import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Toaster } from "./components/ui/sonner";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
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
  | "admin"
  | "login"
  | "register";

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
    <div className="min-h-screen bg-[#FAFAF8] font-sans">
      <Navbar page={page} navigate={navigate} />
      <main>
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "counselors" && <CounselorsPage navigate={navigate} />}
        {page === "dashboard" && <DashboardPage navigate={navigate} />}
        {page === "chat" && <ChatPage navigate={navigate} />}
        {page === "admin" && <AdminPage navigate={navigate} />}
        {page === "login" && <LoginPage navigate={navigate} />}
        {page === "register" && <RegisterPage navigate={navigate} />}
      </main>
      <Toaster richColors />
    </div>
  );
}
