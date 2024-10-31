/* eslint-disable react/react-in-jsx-scope */
import { FC, ReactNode, useContext, useReducer } from 'react';
import { AuthContext, Role, Status } from './AuthContext';
import { authReducer } from './authReducer';

export interface AuthInitialState {
    status: Status | undefined;
    role: Role | undefined;
}

const INITIAL_STATE = {
    status: 'not-authenticated' as Status,
    role: undefined,
};

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [ state, dispatch ] = useReducer(authReducer, INITIAL_STATE);

    const login = (role: Role) => dispatch({ type: 'Auth - Login', payload: { role } });

    const logout = () => dispatch({ type: 'Auth - Logout'});

    return (
        <AuthContext.Provider value={{
            ...state,

            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
