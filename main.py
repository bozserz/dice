Dice = 0

def on_gesture_shake():
    global Dice
    Dice = randint(1, 6)
    if Dice == 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
    elif Dice == 2:
        basic.show_leds("""
            . . . . .
                        . # . . .
                        . . . . .
                        . . . # .
                        . . . . .
        """)
    else:
        pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
