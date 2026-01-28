import { useState } from "react";
import TextInput from "@/components/forms/TextInput/TextInput";

export default function ForgotPasswordPage() {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        setError(null);
        setSuccess(null);
        setLoading(true);

        fetch(import.meta.env.VITE_API_URL + "/auth/forgot", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(data => {
                        setError(data.error || "Something went wrong");
                        setLoading(false);
                        throw new Error("Request failed");
                    });
                }
                return res.json();
            })
            .then(data => {
                setLoading(false);
                setSuccess("Password reset instructions have been sent to your email.");
                e.target.reset();
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="w-full flex min-h-screen items-center justify-center bg-[#1F1918]">
            <div className="w-full max-w-xl rounded-lg bg-white p-8 shadow">
                <h2 className="mb-6 text-center text-2xl font-bold">Forgot Password</h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                    <TextInput id="email" name="email" label="Email*" type="text" required />

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    {success && (
                        <p className="text-green-600 text-sm text-center">{success}</p>
                    )}

                    <button
                        type="submit"
                        className="cursor-pointer w-full rounded bg-[#1F1918] px-4 py-2 font-semibold text-white hover:opacity-80 transition-opacity"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
}
