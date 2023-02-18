function WachtTotVoldoendeAfstand () {
    if (gemetenafstand < afstand) {
        basic.pause(100)
    }
}
function Start () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, snelheid_maqueen)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
}
function draaiRechts () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, snelheid_maqueen)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, snelheid_maqueen)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
}
function Stop () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, snelheid_maqueen)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
}
function draaiLinks () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, snelheid_maqueen)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, snelheid_maqueen)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
let richting = 0
let gemetenafstand = 0
let snelheid_maqueen = 0
let afstand = 0
afstand = 25
snelheid_maqueen = 71
let afstand_botsing = 15
Start()
basic.forever(function () {
    gemetenafstand = maqueen.Ultrasonic(PingUnit.Centimeters)
})
basic.forever(function () {
    if (gemetenafstand < afstand_botsing) {
        if (richting == 0) {
            draaiLinks()
        } else {
            draaiRechts()
        }
    } else if (gemetenafstand > afstand) {
        Start()
        richting = randint(0, 1)
    }
})
