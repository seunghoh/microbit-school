basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P1)) {
        music.playTone(415, music.beat(BeatFraction.Quarter))
    } else {
        music.rest(music.beat(BeatFraction.Whole))
    }
    basic.pause(300)
})
