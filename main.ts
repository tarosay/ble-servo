bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Pitchfork)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Angry)
    pins.servoWritePin(AnalogPin.P1, 23)
    basic.pause(480)
    pins.servoWritePin(AnalogPin.P1, 100)
    basic.showIcon(IconNames.Happy)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (cmd == "f") {
        basic.showIcon(IconNames.Angry)
        pins.servoWritePin(AnalogPin.P1, 23)
        basic.pause(480)
        pins.servoWritePin(AnalogPin.P1, 100)
        bluetooth.uartWriteString("OK")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
    pins.servoWritePin(AnalogPin.P1, 23)
    basic.pause(480)
    pins.servoWritePin(AnalogPin.P1, 100)
    basic.showIcon(IconNames.Happy)
})
let cmd = ""
bluetooth.startUartService()
led.setBrightness(10)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
