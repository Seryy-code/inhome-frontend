import { useAuth } from "@/hooks/useAuth";

export function useApi() {
    const { getValidToken, signOut } = useAuth();

    async function apiFetch(url, options = {}) {
        
        const token = await getValidToken();

        if (!token) {
            console.error('No valid token');
            throw { status: 401, message: "No valid token" };
        }


        const headers = {
            ...(options.headers || {}),
            Authorization: token ? `Bearer ${token}` : '',
        };


        const res = await fetch(import.meta.env.VITE_API_URL + url, {
            ...options,
            headers,
        });

        if (!res.ok) {
            let errorText;
            const data = await res.json();
            errorText = data.detail;
            console.error('API Error:', { status: res.status, message: data.message, data });
            throw { status: res.status, message: data.message || errorText };
        }

        const responseData = await res.json();
        return responseData;
    }

    return { apiFetch };
}
