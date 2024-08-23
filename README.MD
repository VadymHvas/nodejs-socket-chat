# Simple NodeJS Socket Chat
Simple chat project, written in NodeJS using socket.io for college network class.

## Requirements
In order to run the project, you'll need to have NodeJS and git,
in case that you already have it, you can go to next section: ***Running the project***.
To install Nodejs, npm and git, read below

### Installing in Debian-based OS (Debian, Ubuntu, Kali)
```bash
$ sudo apt update
$ sudo apt install git
$ sudo apt install nodejs npm
```
### Installing in Arch Linux
```bash
$ sudo pacman -Syu
$ sudo pacman -S git
$ sudo pacman -S nodejs npm
```

### Installing in FreeBSD
```bash
$ sudo pkg update
$ sudo pkg install git
$ sudo pkg install node
```

### Installing in Termux
```bash
$ pkg update
$ pkg upgrade
$ pkg install git
$ pkg install nodejs
```

## Running the project
To make sure that Nodejs, npm and git work correctly,
you need to write the following commands

```bash
$ git -v
$ node -v
$ npm -v
```

To start texting, you need to clone the repository and run ***server.js***

```bash
$ git clone https://github.com/VadymHvas/nodejs-socket-chat.git
```

Go to the project directory

```bash
$ cd nodejs-socket-chat
```

Install dependencies

```bash
$ npm install
```
Run server (default port **4000**)

```bash
$ node server.js
```

Еhe URL of the server that processes requests will be displayed in the logs.
An example is below

```bash
Server is running, Server IP: 192.168.0.5
```
To connect to the chat, you need to copy the IP address and execute the command below

```bash
$ node client.js *paste IP address*
```