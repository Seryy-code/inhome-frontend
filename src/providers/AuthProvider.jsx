'use client';
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ACCESS_TOKEN_EXPIRE_MINUTES = 6000;
const REFRESH_TOKEN_EXPIRE_DAYS = 7;

export const AuthContext = createContext({});

export function isTokenExpired(access_expires_at) {
    if (!access_expires_at) {
        return true;
    }

    const now = Date.now();
    const expired = now >= access_expires_at - 5000;

    return expired;
}

export function isRefreshExpired(refresh_expires_at) {
    if (!refresh_expires_at) {
        return true;
    }

    const now = Date.now();
    const expired = now > refresh_expires_at - 5000;

    return expired;
}

export default function AuthProvider({ children }) {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getRefreshToken(refresh_token) {
        try {
            const res = await fetch(import.meta.env.VITE_API_URL + '/auth/refresh', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ refreshToken: refresh_token }),
            });

            if (!res.ok) {
                throw new Error('Failed to refresh token');
            }

            const data = await res.json();

            Cookies.set('access_token', data.accessToken, { expires: ACCESS_TOKEN_EXPIRE_MINUTES / 1440 });
            Cookies.set('access_expires_at', Date.now() + ACCESS_TOKEN_EXPIRE_MINUTES * 60 * 1000, { expires: ACCESS_TOKEN_EXPIRE_MINUTES / 1440 });

            Cookies.set('refresh_token', data.refreshToken, { expires: REFRESH_TOKEN_EXPIRE_DAYS });
            Cookies.set('refresh_expires_at', Date.now() + REFRESH_TOKEN_EXPIRE_DAYS * 24 * 60 * 60 * 1000, { expires: REFRESH_TOKEN_EXPIRE_DAYS });

            return data.accessToken;

        } catch (err) {
            console.error('Error refreshing token:', err.message);
            Cookies.remove('access_token');
            Cookies.remove('access_expires_at');
            Cookies.remove('refresh_token');
            Cookies.remove('refresh_expires_at');
            return null;
        }
    }

    async function getValidToken() {
        const accessToken = Cookies.get('access_token');
        const accessExpiresAt = Cookies.get('access_expires_at');
        const refreshToken = Cookies.get('refresh_token');
        const refreshExpiresAt = Cookies.get('refresh_expires_at');

        if (!accessToken) {
            return null;
        }

        if (isTokenExpired(accessExpiresAt)) {
            if (isRefreshExpired(refreshExpiresAt)) {
                Cookies.remove('access_token');
                Cookies.remove('access_expires_at');
                Cookies.remove('refresh_token');
                Cookies.remove('refresh_expires_at');
                return null;
            } else {
                return await getRefreshToken(refreshToken);
            }
        }

        return accessToken;
    }

    async function signUp(formData) {
        setError(null);

        if (!formData.agreed) {
            setError("You must agree to the terms before signing up.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(import.meta.env.VITE_API_URL + "/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    fullName: formData.fullName,
                    phoneNumber: formData.phoneNumber,
                    birthday: formData.birthday,
                    address: formData.address,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.error || "Sign up failed");
            } else {
                navigate('/login');
            }

        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    async function signIn(formData) {
        setError(null);
        setLoading(true);

        try {
            const res = await fetch(import.meta.env.VITE_API_URL + "/auth/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: formData.email, password: formData.password })
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.error || "Login failed");
                setLoading(false);
                throw new Error("Login failed");
            }

            const data = await res.json();

            Cookies.set('access_token', data.accessToken, { expires: ACCESS_TOKEN_EXPIRE_MINUTES / 1440 });
            Cookies.set('access_expires_at', String(Date.now() + ACCESS_TOKEN_EXPIRE_MINUTES * 60 * 1000), { expires: ACCESS_TOKEN_EXPIRE_MINUTES / 1440 });
            Cookies.set('refresh_token', data.refreshToken, { expires: REFRESH_TOKEN_EXPIRE_DAYS });
            Cookies.set('refresh_expires_at', String(Date.now() + REFRESH_TOKEN_EXPIRE_DAYS * 24 * 60 * 60 * 1000), { expires: REFRESH_TOKEN_EXPIRE_DAYS });

            setLoading(false);
            navigate('/');

        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    }

    async function signOut() {
        Cookies.remove('access_token');
        Cookies.remove('access_expires_at');
        Cookies.remove('refresh_token');
        Cookies.remove('refresh_expires_at');
        navigate('/login');
    }

    return (
        <AuthContext.Provider
            value={{
                loading,
                error,
                signIn,
                signUp,
                signOut,
                getValidToken,
                getRefreshToken
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthProvider = () => useContext(AuthContext);
