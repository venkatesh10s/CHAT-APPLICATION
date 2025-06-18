# CHAT-APPLICATION

"COMPANY": CODETECH IT SOLUTIONS

"NAME": S VENKATESH

"INTERN ID": CT04DF1907

"DOMAIN": FULL STACK DEVELOPER

"DURATION": 4 WEEKS

"MENTOR": NEELA SANTOSH KUMAR

This is the second task I completed during my internship, and the goal of this project was to create a real-time chat application. 

The idea was to let users communicate instantly through a browser without reloading the page. I used Node.js, Express.js, and Socket.IO for this project.

I started the project by creating a folder structure that includes both backend and frontend parts. For the backend, I wrote a simple Express server in server.js, and then used Socket.IO to establish WebSocket connections between the server and clients. Socket.IO is a library that makes it easier to work with WebSockets and helps in building real-time applications.

The frontend part consists of three main files: index.html, style.css, and client.js. The index.html file contains the structure of the chat window. It includes a message display area, an input box for typing messages, and a send button. I kept the design simple and clean using basic CSS in style.css.

In client.js, I wrote the logic to connect the user to the Socket.IO server. When a user enters a message and clicks send, the message is sent to the server using a socket event. The server receives that message and then broadcasts it to all connected clients, including the sender. Every client receives the message and it gets added to their chat window in real time.

## Technologies Used

Node.js: To build the backend server

Express.js: To handle routes and serve static files

Socket.IO: For real-time bi-directional communication between client and server

HTML/CSS/JS: To design and control the frontend interface


## How the Chat App Works

1. When a user opens the chat application in their browser, a WebSocket connection is immediately established between their browser and the server using Socket.IO.

2. The user can type a message and send it. That message is emitted to the server via a socket event.

3. The server listens for messages and then broadcasts them to all connected users.

4. All users see the new message appear in their chat window instantly

This application does not store messages permanently. It focuses purely on real-time communication, which means if the user refreshes or leaves the page, the chat messages are lost. However, that is okay for the scope of this task, since it was meant to understand and demonstrate real-time interaction and socket events.

## This task helped me understand core concepts like:

How sockets work under the hood

How to handle real-time message broadcasting

How to link backend events with frontend actions

Setting up a server and client to talk to each other over WebSockets

## Output and Behavior

After starting the server with node server.js, the application can be accessed via http://localhost:3000. When opened in multiple browser windows or tabs, users can send and receive messages live. Each message appears with no delay, proving that the sockets are working as expected.
