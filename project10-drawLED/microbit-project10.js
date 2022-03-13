input.onGesture(Gesture.LogoUp, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    sprite = game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y))
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
