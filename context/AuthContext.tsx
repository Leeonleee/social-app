import { createContext, ReactNode, useContext, useState } from "react";

// Define the User interface
interface User {
    id: string;
    email: string;
    username?: string;
    name?: string;
    [key: string]: any; // Allow additional properties
}

// Define the context type
interface AuthContextType {
    user: User | null;
    setAuth: (authUser: User) => void;
    setUserData: (userData: User) => void;
}

// Define props for AuthProvider
interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    const setAuth = (authUser: User) => {
        setUser(authUser);
    }

    const setUserData = (userData: User) => {
        setUser({...userData});
    }

    return (
        <AuthContext.Provider value={{user, setAuth, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}