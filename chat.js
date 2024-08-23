/**
 * Sends a message to all connected users except the user with the specified id.
 *
 * @param {Object} io - The global server object (typically the `socket.io` server instance).
 * @param {Array<{id: string; ip: string}>} connections
 * @param {string} message
 * @param {string} socketId
 */
export function broadcast(io, connections, message, socketId) {
    connections.forEach(conn => {
        if (conn.id !== socketId) {
            io.to(conn.id).emit("message", message);
        }
    });
}

/**
 * Adds a user in array of connections
 *
 * @param {Array<{id: string; ip: string}>} connections
 * @param {string} socketId
 * @param {string} ip
 */
export function addUser(connections, socketId, ip) {
    connections.push({id: socketId, ip});
}