import { createContext, useContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextData {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  login: (user: string, password?: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );
  const navigate = useNavigate();

  async function login(user: string, password?: string) {
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (user === "admin" && password === "Admin@123") {
      setUser({ name: "Administrador STI", email: user });
      navigate("/dashboard");
    } else {
      throw new Error("Usuário ou senha incorretos!");
    }
  }

  function logout() {
    setUser(null);
    navigate("/login");
  }

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
