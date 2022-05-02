tinkercademy.crashSensorSetup(DigitalPin.P1)
let switchOn = false
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        switchOn = !(switchOn)
    }
    if (switchOn == true) {
        tinkercademy.LED(DigitalPin.P0, OnOff.On)
    } else {
        tinkercademy.LED(DigitalPin.P0, OnOff.Off)
    }
    basic.pause(300)
})
