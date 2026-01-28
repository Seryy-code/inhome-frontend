import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "@/components/forms/TextInput/TextInput";
import Cookies from "js-cookie";

const ACCESS_TOKEN_EXPIRE_MINUTES = 6000;
const REFRESH_TOKEN_EXPIRE_DAYS = 7;

export default function LoginPage() {
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError(null);
        setLoading(true);

        fetch(import.meta.env.VITE_API_URL + "/auth/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(data => {
                        setError(data.error || "Login failed");
                        setLoading(false);
                        throw new Error("Login failed");
                    });
                }
                return res.json();
            })
            .then(data => {
                Cookies.set('access_token', data.accessToken, { expires: ACCESS_TOKEN_EXPIRE_MINUTES / 1440 });
                Cookies.set('access_expires_at', String(Date.now() + ACCESS_TOKEN_EXPIRE_MINUTES * 60 * 1000), { expires: ACCESS_TOKEN_EXPIRE_MINUTES / 1440 });
                Cookies.set('refresh_token', data.refreshToken, { expires: REFRESH_TOKEN_EXPIRE_DAYS });
                Cookies.set('refresh_expires_at', String(Date.now() + REFRESH_TOKEN_EXPIRE_DAYS * 24 * 60 * 60 * 1000), { expires: REFRESH_TOKEN_EXPIRE_DAYS });

                setLoading(false);
                window.location.href = '/';
            })
            .catch(err => {
            });
    };

    return (
        <div className="w-full flex min-h-screen items-center justify-center bg-[#1F1918]">
            <div className="w-full max-w-xl rounded-lg bg-white p-8 shadow">
                <h2 className="mb-6 text-center text-2xl font-bold">Sign In</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                    <TextInput id="email" name="email" label="Email*" type="text" required />
                    <TextInput id="password" name="password" label="Password*" type="password" required />

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="cursor-pointer w-full rounded bg-[#1F1918] px-4 py-2 font-semibold text-white hover:opacity-80"
                    >
                        {loading ? "Loading.." : "Login"}
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-2">
                        or{" "}
                        <a
                            href="/forgot-password"
                            className="text-[#1F1918] font-semibold hover:underline"
                        >
                            forgot password?
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
