import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TextInput from "@/components/forms/TextInput/TextInput";

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(import.meta.env.VITE_API_URL + "/auth/reset", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, newPassword }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Password reset failed");
            } else {
                setSuccess("Your password has been successfully reset. Redirecting to login...");
                setTimeout(() => navigate("/login"), 2500);
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    if (!token) {
        return (
            <div className="w-full flex min-h-screen items-center justify-center bg-[#1F1918] text-white">
                <p className="text-lg">Invalid or missing reset token</p>
            </div>
        );
    }

    return (
        <div className="w-full flex min-h-screen items-center justify-center bg-[#1F1918]">
            <div className="w-full max-w-xl rounded-lg bg-white p-8 shadow">
                <h2 className="mb-6 text-center text-2xl font-bold">Reset Password</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                    <TextInput
                        id="newPassword"
                        name="newPassword"
                        label="New Password*"
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <TextInput
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password*"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-600 text-sm">{success}</p>}

                    <button
                        type="submit"
                        className="cursor-pointer w-full rounded bg-[#1F1918] px-4 py-2 font-semibold text-white hover:opacity-80"
                        disabled={loading}
                    >
                        {loading ? "Resetting..." : "Set New Password"}
                    </button>
                </form>
            </div>
        </div>
    );
}
