import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { isIP } from "node:net";
import socket from "socket.io-client";
import ip from "ip";

if (isIP(process.argv[2])) {
    const io = socket(`http://${process.argv[2]}:4000`);
    const rl = readline.createInterface({ input, output });

    io.emit("add_user", ip.address());

    console.log("Connected to the chat! Enter /q for quit");

    rl.on("line", (input) => {
        if (input.startsWith("/q ")) {
            io.disconnect();
            rl.close();

            console.log("Disconnected from the chat");
        }

        io.emit("message", {message: input, ip: ip.address()});
    });

    io.on("message", (message) => {
        console.log(message);
    });
} else {
    throw new Error("Enter correct ip");
}
