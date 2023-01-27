import "reflect-metadata";
import app from "./app";
import * as http from "http";
import socketServer from "./socket";

let port =process.env.PORT || 9001;
app.set("port", port);
let server = http.createServer(app);
server.listen(port);
server.on("listening", onListening);
const io = socketServer(server);

function onListening() {
  console.log("Server Running on Port: ", port);
}
