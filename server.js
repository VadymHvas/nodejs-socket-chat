import express from 'express';
import { createServer } from 'http';
import { Server } from "socket.io";
import ip from "ip";
import { broadcast, addUser } from "./chat.js";

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = 4000;

/**
 * @type {Array<{id: string; ip: string}>}
 */
let connections = [];

io.on('connection', (socket) => {
    socket.on("add_user", (ip) => {
        addUser(connections, socket.id, ip);
    });

    socket.on("message", ({message, ip}) => {
        const msg = `From ${ip}: ${message}`;

        broadcast(io, connections, msg, socket.id);
    });

    socket.on("disconnect", () => {
        connections = connections.filter((conn) => conn.id !== socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running, Server IP: ${ip.address()}`);
});