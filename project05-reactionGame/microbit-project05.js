input.onButtonPressed(Button.A, function () {
    if (block == false) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.clearScreen()
        block = true
        start = false
    }
})
input.onButtonPressed(Button.AB, function () {
    if (start == false) {
        start = true
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.clearScreen()
        basic.pause(randint(0, 2) * 1000)
        led.plot(randint(0, 4), randint(0, 4))
        block = false
    }
})
input.onButtonPressed(Button.B, function () {
    if (block == false) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.clearScreen()
        block = true
        start = false
    }
})
let block = false
let start = false
start = false
block = true
