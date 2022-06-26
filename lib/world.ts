import Drawable from "./drawable.ts";

class World {
    #ctx: CanvasRenderingContext2D;
 constructor(
    private canvas: HTMLCanvasElement,
    private drawables: Drawable[] = []
 ){
    const ctx = canvas.getContext("2d");
    if(!ctx) {
        throw new Error('Unable to load context from canvas');
    }
    this.#ctx = ctx;
 }

 addDrawable(drawable: Drawable) {
    this.drawables.push(drawable);
 }

 draw() {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    for(const drawable of this.drawables) {
        const {
            bitmap,
            x,
            y,
            w,
            h
        } = drawable.drawable();
        this.#ctx.drawImage(bitmap, centerX + x - (w/2), centerY + y - (h/2), w, h)
    }
 }
}

export default World;