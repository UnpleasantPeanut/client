import Drawable from "./drawable.ts";

class Entity implements Drawable {
    static async fromSource(image: HTMLImageElement) {
        return new Entity(
            await createImageBitmap(image, 0, 0, 256, 256),
            0,
            0
        )
    }

    constructor(
        private imageBitmap: ImageBitmap,
        private x: number,
        private y: number,
    ){
    }

    drawable() {
        return {
            bitmap: this.imageBitmap, 
            x: this.x, 
            y: this.y, 
            w: 128, 
            h: 128
        };
    }
}

export default Entity;