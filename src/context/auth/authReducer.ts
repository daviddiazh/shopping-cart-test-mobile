import { Role } from './AuthContext';
import { AuthInitialState } from './AuthProvider';

type AuthActionTypes =
|   { type: 'Auth - Login', payload: { role: Role } }
|   { type: 'Auth - Logout' }

export const authReducer = ( state: AuthInitialState, action: AuthActionTypes ): AuthInitialState => {

    switch( action.type ){
       case 'Auth - Login':
           return {
               ...state,
               status: 'authenticated',
               role: action.payload.role,
           };
        case 'Auth - Logout':
            return {
                ...state,
                status: 'not-authenticated',
                role: undefined,
            };
        default:
           return state;
    }
};
