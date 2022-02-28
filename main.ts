let SL = 0
let R = 0
let L = 0
basic.forever(function () {
    SL = Rover.LineTracking()
    if (SL == 1 || SL == 3) {
        R = -50
    } else {
        R = 255
    }
    if (SL == 4 || SL == 6) {
        L = -50
    } else {
        L = 255
    }
    Rover.MotorRunDual(L, R)
})
