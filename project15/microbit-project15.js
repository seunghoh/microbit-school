let distance = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = Math.idiv(pins.pulseIn(DigitalPin.P2, PulseValue.High), 58)
    basic.showNumber(distance)
    if (distance <= 5) {
        tinkercademy.LED(DigitalPin.P0, OnOff.On)
    } else {
        tinkercademy.LED(DigitalPin.P0, OnOff.Off)
    }
    basic.pause(100)
})
