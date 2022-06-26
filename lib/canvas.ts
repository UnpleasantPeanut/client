let _canvas: HTMLCanvasElement;
let _ctx: CanvasRenderingContext2D;

const resize = () => {
  _canvas.width = innerWidth;
  _canvas.height = innerHeight;
};

const loadCanvas = (id: string) => {
  if (_canvas) {
    console.log("Canvas has already been loaded.");
    return;
  }
  _canvas = document.getElementById(id) as HTMLCanvasElement;
  if (!_canvas) {
    throw new Error(`No canvas element with id (${id}) found`);
  }
  _ctx = _canvas.getContext("2d") as CanvasRenderingContext2D;
  if (!_ctx) {
    throw new Error("Could not load Context 2D");
  }
  addEventListener("resize", resize, false);
  resize();
};

export const getContext = (id: string) => {
  loadCanvas(id);
  return _ctx;
};

const getCanvas = (id: string) => {
  loadCanvas(id);
  return _canvas;
}

export default getCanvas;
