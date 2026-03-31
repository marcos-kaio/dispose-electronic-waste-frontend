import { useState } from "react";
import { useAuth } from "@/features/auth/contexts/AuthContext";
import { User, LogOut } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const navButtonStyle = "hover:text-[#224185]";

function AppLayout() {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 mx-6 md:mx-13 pt-10 pb-4 px-4 md:px-9 border-b-2 bg-[#F3F4F6]/90 backdrop-blur-md border-[#224185]">
        <div className="flex flex-row justify-between font-medium text-[20px]">
          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <p className={`cursor-pointer ${navButtonStyle}`}>
                Olá, {user?.name}!
              </p>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full min-w-55 bg-[#F3F4F6] border border-[#224185]/20 rounded-sm shadow-xl py-2 z-50 flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  to="/"
                  className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-700 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <User size={18} className="text-[#224185]" />
                  Meu Perfil
                </Link>
                <Link
                  to="/"
                  className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-700 transition-colors"
                  onClick={logout}
                >
                  <LogOut size={18} className="text-[#224185]" />
                  Sair
                </Link>
              </div>
            )}
          </div>

          <nav className="flex flex-row items-center gap-8 md:gap-16">
            <Link to="/history" className={navButtonStyle}>
              Histórico de descartes
            </Link>
            <Link to="/report" className={navButtonStyle}>
              Relatório
            </Link>
            <Link to="/learn-more" className={navButtonStyle}>
              Saiba mais
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
