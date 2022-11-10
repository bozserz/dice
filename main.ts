let Dice = 0
input.onGesture(Gesture.Shake, function () {
    Dice = randint(1, 6)
    if (Dice == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (Dice == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Dice == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Dice == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (Dice == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    basic.pause(3000)
    basic.clearScreen()
})
