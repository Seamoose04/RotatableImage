/**
* Custom blocks
*/

//% color=#0080ff icon="↻"
namespace Rotatable {
    //% block="$img"
    //% img.defl="screen_image_picker"
    export function createRotatableImage(img: Image): RotatableImage {
        return new RotatableImage(img);
    }

    //% block="$rot_img, degrees"
    export function rotateImage(rot_img: RotatableImage, degrees: number): void {
        rot_img.rotate(degrees);
    }
}