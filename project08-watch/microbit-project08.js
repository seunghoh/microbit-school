input.onButtonPressed(Button.A, function () {
    if (hours < 24) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 60) {
        minutes += 1
    } else {
        minutes = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    time = "" + hours + ":"
    if (minutes < 10) {
        time = "" + time + "0"
    }
    time = "" + time + minutes
    basic.showString(time)
})
let time = ""
let minutes = 0
let hours = 0
hours = 0
minutes = 0
time = ""
basic.forever(function () {
    basic.pause(60000)
    if (minutes < 60) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 24) {
            hours += 1
        } else {
            hours = 0
        }
    }
})
