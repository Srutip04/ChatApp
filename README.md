# Overview
This is a real-time chat application built using Socket.io, allowing users to engage in instant messaging over the network. Below are instructions on how to run the server and client applications, along with a brief description of the application's architecture and concurrency handling mechanisms.

# How to Run

## Server
### Install the Server:
```bash
git clone git@github.com:Srutip04/ChatApp.git
cd ChatApp
npm install
npm run server
```
### The server should now be running on http://localhost:5000.

## Client
### Install the Client

```bash
cd client
npm install
npm run dev
```
## Set the enviroment variables in the root directory 

```
PORT=5000
MONGO_URL=mongodb+srv://b120064:qiLBFkXveyimN4L1@cluster0.x4ejxea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=jxMgC+TkC1iPlsukb6yeQQC4ANOkgA+1l7z9xZNHBfM=
NODE_ENV=development

```
## Application Architecture and Concurrency Handling

### Server-Side Architecture:

- The server is implemented using Node.js with Express.js framework for handling HTTP requests.
- Socket.io library is used for enabling real-time communication between clients and the server.
- Concurrency is handled through event-driven architecture provided by Node.js and Socket.io. Each client connection is managed asynchronously, allowing for multiple clients to interact concurrently.
- The server maintains a list of connected clients and facilitates broadcasting messages to all connected clients.

### Client-Side Architecture:

- The client-side is built using React.js for creating a dynamic user interface.
- Socket.io client library is utilized for establishing a WebSocket connection with the server.
- React components manage the UI elements and handle user interactions.
- Real-time updates are reflected on the UI as messages are received from the server via WebSocket connection.
  
