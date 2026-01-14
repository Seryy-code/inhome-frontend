import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { isTokenExpired, isRefreshExpired } from "@/providers/AuthProvider";

export default function ProtectedRoute({ children }) {
    const accessToken = Cookies.get('access_token');
    const accessExpiresAt = Cookies.get('access_expires_at');
    const refreshToken = Cookies.get('refresh_token');
    const refreshExpiresAt = Cookies.get('refresh_expires_at');

    if (!accessToken || !refreshToken) {
        return <Navigate to="/login" replace />;
    }

    if (isRefreshExpired(refreshExpiresAt)) {
        Cookies.remove('access_token');
        Cookies.remove('access_expires_at');
        Cookies.remove('refresh_token');
        Cookies.remove('refresh_expires_at');
        return <Navigate to="/login" replace />;
    }


    return children;
}
