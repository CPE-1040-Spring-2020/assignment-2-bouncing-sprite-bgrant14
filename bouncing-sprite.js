//Initialize the sprite at a random location
let x: number = Math.randomRange(0, 5)
let y: number = Math.randomRange(0, 5)
let bSprite: game.LedSprite = game.createSprite(x, y)

//Add 45 degrees to the direction of the sprite
input.onButtonPressed(Button.A, function () {
    bSprite.changeDirectionBy(45)
})

//Place the sprite at a new location
input.onButtonPressed(Button.B, function () {
    bSprite.setX(Math.randomRange(0, 5))
    bSprite.setY(Math.randomRange(0, 5))
})

basic.forever(function () {
    //Move by one LED, change the direction when the edge is reached
    bSprite.ifOnEdgeBounce()
    bSprite.move(1)
    //basic.pause(50)
})
