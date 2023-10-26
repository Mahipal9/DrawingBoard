import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://drawsketch-server.netlify.app/' : 'http://localhost:5000'
export const socket = io(URL);