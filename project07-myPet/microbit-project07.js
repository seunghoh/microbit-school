input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Silly)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Angry)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Surprised)
})
basic.showIcon(IconNames.Happy)
basic.pause(3000)
basic.clearScreen()
