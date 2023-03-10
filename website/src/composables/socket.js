import io from "socket.io-client";

const socket = io.connect("http://localhost:6001");
// socket.on("welcome", (msg) => {
//   console.log(msg);
// });

export default socket;