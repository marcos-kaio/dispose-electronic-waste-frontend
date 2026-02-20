import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/features/auth/pages/LoginPage";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;