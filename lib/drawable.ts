interface Drawable {
    drawable(): {
        bitmap: ImageBitmap,
        x: number,
        y: number,
        w: number,
        h: number
    };
}

export default Drawable;