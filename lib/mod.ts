import getContext from "./canvas.ts";
import game from "./game.ts";
import loadSocketConnection from "./socket.ts";

const ctx = getContext("canvas");

let counter = 0;
const colors = ["red", "blue", "green"];

const SERVER_URL = Deno.env.get("SERVER_URL");

if (!SERVER_URL) {
  throw new Error("Server url is not set");
}

loadSocketConnection(SERVER_URL);

const update = () => {
  counter += 1;
};

const draw = () => {
  ctx.fillStyle = colors[counter % colors.length];
  ctx.fillRect(0, 0, 100, 100);
};

console.log("hello world unpleasant peanut");

game({
  draw,
  update,
});
