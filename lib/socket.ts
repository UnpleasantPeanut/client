let _socket: WebSocket;

const loadSocketConnection = (url: string) => {
  if (_socket) {
    console.warn("Socket already open");
    return _socket.send;
  }
  _socket = new WebSocket(url);

  _socket.addEventListener("open", (event) => {
    _socket.send("Hello Server!");
  });

  _socket.addEventListener("message", function (event) {
    console.log("Message from server ", event.data);
  });
};

export default loadSocketConnection;
