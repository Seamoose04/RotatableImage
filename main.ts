let rotatableImage = new RotatableImage(assets.image`testImg`);
let rotatableSprite = sprites.create(rotatableImage.currentImg);

let angle = 0;
let pFrameTime = game.runtime();

game.onUpdate(() => {
    rotatableImage.rotate(angle);
    rotatableSprite.setImage(rotatableImage.currentImg);
    angle += 3;
    info.setScore(1000 / (game.runtime() - pFrameTime));
    pFrameTime = game.runtime();
})