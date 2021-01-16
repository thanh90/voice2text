import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

global.socket_uuid = uuidv4();

const socket = io('wss://183.96.253.147:8052', {
    query: {
        id: socket_uuid
    }
});

socket.on('connect', () => {
    console.log(socket.id);
});

export default socket;