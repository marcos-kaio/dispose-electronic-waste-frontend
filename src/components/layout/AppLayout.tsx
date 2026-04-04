import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/features/auth/contexts/AuthContext";
import { User, LogOut } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

const navButtonStyle = "hover:text-[#224185]";

function AppLayout() {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutsideDropdown(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
  });

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 mx-6 md:mx-13 pt-10 pb-4 px-4 md:px-9 border-b-2 bg-[#F3F4F6]/90 backdrop-blur-md border-[#224185]">
        <div className="flex flex-row justify-between font-medium text-[20px]">
          <div className="relative" ref={dropdownRef}>
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
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `hover:text-[#224185] transition-all ${
                  isActive ? "text-[#224185] font-bold" : "text-black"
                }`
              }
            >
              Histórico de descartes
            </NavLink>
            <NavLink
              to="/report"
              className={({ isActive }) =>
                `hover:text-[#224185] transition-all ${
                  isActive ? "text-[#224185] font-bold" : "text-black"
                }`
              }
            >
              Relatório
            </NavLink>
            <NavLink
              to="/learn-more"
              className={({ isActive }) =>
                `hover:text-[#224185] transition-all ${
                  isActive ? "text-[#224185] font-bold" : "text-black"
                }`
              }
            >
              Saiba mais
            </NavLink>
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
