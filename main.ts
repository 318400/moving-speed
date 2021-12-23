function led2 (y: number, speed: number) {
    if (方向 == 1) {
        while (true) {
            for (let index = 0; index <= 4; index++) {
                if (list[y][index] == 1) {
                    led.plot(y, index)
                } else {
                    led.unplot(y, index)
                }
            }
            list[y].unshift(list[y].pop())
            basic.pause(speed)
        }
        basic.clearScreen()
    } else if (方向 == 2) {
        while (true) {
            for (let index = 0; index <= 4; index++) {
                if (list[y][index] == 1) {
                    led.plot(index, y)
                } else {
                    led.unplot(index, y)
                }
            }
            list[y].unshift(list[y].pop())
            basic.pause(speed)
        }
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    方向 = 1
})
input.onButtonPressed(Button.B, function () {
    方向 = 2
})
let list: number[][] = []
let 方向 = 0
方向 = 1
list = [
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
]
]
control.inBackground(function () {
    led2(0, 1000)
})
control.inBackground(function () {
    led2(1, 500)
})
control.inBackground(function () {
    led2(2, 250)
})
control.inBackground(function () {
    led2(3, 200)
})
control.inBackground(function () {
    led2(4, 100)
})
