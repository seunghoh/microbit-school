let Angle = 0
basic.forever(function () {
    Angle = input.compassHeading()
    if (Angle >= 0 && Angle < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (Angle >= 45 && Angle < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (Angle >= 135 && Angle < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (Angle >= 225 && Angle < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
