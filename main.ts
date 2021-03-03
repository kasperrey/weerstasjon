radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(input.lightLevel())
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(3)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(2)
})
radio.onReceivedValue(function (name, value) {
    basic.showNumber(value)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("name", input.temperature())
})
