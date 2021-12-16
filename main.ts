function led2 (y: number, speed: number) {
    if (A == 1) {
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
    }
}
function led22 (y: number, speed: number) {
    if (A == 2) {
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
    }
}
input.onButtonPressed(Button.A, function () {
    A = 1
})
input.onButtonPressed(Button.B, function () {
    A = 2
})
let A = 0
let list: number[][] = []
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
while (false) {
    A = 2
}
control.inBackground(function () {
    led2(0, 1000)
})
control.inBackground(function () {
    led22(0, 1000)
})
control.inBackground(function () {
    led22(1, 500)
})
control.inBackground(function () {
    led2(1, 500)
})
control.inBackground(function () {
    led2(2, 250)
})
control.inBackground(function () {
    led22(2, 250)
})
control.inBackground(function () {
    led2(3, 200)
})
control.inBackground(function () {
    led22(3, 200)
})
control.inBackground(function () {
    led2(4, 100)
})
control.inBackground(function () {
    led22(4, 100)
})
