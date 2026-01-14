import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

export const useAuth = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) throw new Error('AuthContext: AuthContext');

    return authContext;
}
