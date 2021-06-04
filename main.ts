bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Pitchfork)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (cmd == "f") {
        basic.showIcon(IconNames.Angry)
        pins.servoWritePin(AnalogPin.P1, 26)
        basic.pause(480)
        pins.servoWritePin(AnalogPin.P1, 100)
        bluetooth.uartWriteString("OK")
    }
})
let cmd = ""
bluetooth.startUartService()
led.setBrightness(20)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
