import { createContext } from 'react';

export type Role = 'user' | 'business' | 'delivery';
export type Status = 'authenticated' | 'not-authenticated';

interface AuthContextProps {
    status: Status | undefined;
    role: Role | undefined;

    login: (role: Role) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
