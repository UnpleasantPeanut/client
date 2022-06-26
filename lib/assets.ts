export const loadAsset = (src: string): Promise<InstanceType<typeof Image>> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image), false);
        image.addEventListener('error', reject);
        image.src = src;
    });
}