import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../../hooks/useSockets';
import { AuthContext } from '../auth/AuthContext';
import { Socket } from 'socket.io-client';
import { API } from '../../api';

interface SocketContextProps {
    socket: Socket;
    online: boolean;
}

export const SocketContext = createContext({} as SocketContextProps);

export const SocketProvider: React.FC<any> = ({ children }) => {

    const { socket, online, sockectConnect, sockectDisconnect } = useSocket(API.baseUrl);

    const { status } = useContext(AuthContext);

    useEffect(() => {
        if (status === 'authenticated') {sockectConnect();}
    }, [status, sockectConnect]);

    useEffect(() => {
        if (status === 'not-authenticated') {sockectDisconnect();}
    }, [status, sockectDisconnect]);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    );
};

export const useSocketProvider = () => useContext(SocketContext);
