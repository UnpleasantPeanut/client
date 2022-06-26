import { loadAsset } from "./assets.ts";
import getCanvas from "./canvas.ts";
import Drawable from "./drawable.ts";
import Entity from "./entity.ts";
import game from "./game.ts";
import Keybinds from "./keybinds.ts";
import loadSocketConnection from "./socket.ts";
import World from "./World.ts";

const canvas = getCanvas("canvas");

const SERVER_URL = Deno.env.get("SERVER_URL");

if (!SERVER_URL) {
  throw new Error("Server url is not set");
}

console.log('Initiating connection with server.');
loadSocketConnection(SERVER_URL);

console.log('Setting keybinds.')
const keybinds = new Keybinds();
keybinds.onChange(console.log);

console.log('Creating world');
const world = new World(
  canvas
);

console.log('Loading player asset');
loadAsset('/player.png')
  .then(image => Entity.fromSource(image))
  .then(entity => world.addDrawable(entity));


const update = () => {};

const draw = () => {
  world.draw();
};

console.log('Running game.');
game({
  draw,
  update,
});
