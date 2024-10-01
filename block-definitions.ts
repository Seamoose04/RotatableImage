/**
* Custom blocks
*/

//% color=#0080ff icon="↻"
namespace Rotatable {
    //% block
    export function createRotatableImage(img: Image): RotatableImage {
        return new RotatableImage(img);
    }

    //% block
    export function rotatedImage(rot_img: RotatableImage, degrees: number): void {
        rot_img.rotate(degrees);
    }
}