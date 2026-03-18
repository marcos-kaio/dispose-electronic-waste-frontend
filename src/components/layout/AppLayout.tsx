import { useAuth } from "@/features/auth/contexts/AuthContext";
import { Link, Outlet } from "react-router-dom";

const navButtonStyle = "hover:text-[#224185]";

function AppLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="mx-6 md:mx-13 mt-6 py-4 px-4 md:px-9 border-b-2 border-[#224185]">
        <div className="flex flex-row justify-between font-medium text-[20px]">
          <p onClick={logout}>Olá, {user?.name}!</p>
          <nav className="flex flex-row items-center gap-8 md:gap-16">
            <Link to="" className={navButtonStyle}>
              Histórico de descartes
            </Link>
            <Link to="" className={navButtonStyle}>
              Relatório
            </Link>
            <Link to="" className={navButtonStyle}>
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
