/**
* Custom blocks
*/

//% color=#0080ff icon="↻"
namespace Rotatable {
    //% block="Create Rotatable-Image"
    //% img.defl="screen_image_picker"
    export function createRotatableImage(img: Image): RotatableImage {
        return new RotatableImage(img);
    }

    //% block="Rotate a Rotatable-Image"
    export function rotateImage(rot_img: RotatableImage, degrees: number): void {
        rot_img.rotate(degrees);
    }
}