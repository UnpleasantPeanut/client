let _update: () => void;
let _draw: () => void;
let running = false;

const loop = () => {
  _update();
  _draw();
  requestAnimationFrame(loop);
};

interface GameParams {
  update: () => void;
  draw: () => void;
}

const game = ({ update, draw }: GameParams) => {
  if (running) {
    console.warn("Attempted to run a game that is already running");
    return;
  }
  running = true;
  _update = update;
  _draw = draw;
  requestAnimationFrame(loop);
};

export default game;
