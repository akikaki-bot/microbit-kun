// MineSuipa-
// 
// TUkuttano ha watasi desu
function MakeBombs (BombsCount: number) {
    console.log(`Bombs are required! ${BombsCount}`)
for (let index = 0; index < BombsCount; index++) {
        x2 = randint(0, 4)
        y2 = randint(0, 4)
        console.log(`MakeBomb * ${x2} : ${y2}`)
Bombs.push({x:x2, y:y2})
    }
}
function FirstDisplay () {
    console.log('[GameSelect] Game Select!!!')
if (input.pinIsPressed(TouchPin.P0)) {
    	
    }
}
function GameClear () {
    const bombs = RandomBombs(difficult)
displayLEDs = 25
    console.log(`ALLDISPLAY * ${displayLEDs} ALLBOMBS * ${bombs} ALLOK * ${BombsCountUp}`)
if (BombsCountUp >= displayLEDs - Bombs) {
        basic.showString("Game Clear!!! Thanks for playing!")
    }
}
input.onButtonPressed(Button.A, function () {
    if (playerMoveInfomation == "XDeg" || playerMoveInfomation == "DEFO") {
        if (playerMoveInfomation != "DEFO") {
            player.turn(Direction.Right, 270)
            console.log(`LOG * DEG 270`)
        }
        playerMoveInfomation = "YDeg"
    }
    if (player_tf) {
        X += 1
        player.move(1)
    } else {
        X += -1
        player.move(-1)
    }
    if (X < 0) {
        player_tf = true
        X = 0
    }
    if (X > 4) {
        player_tf = false
        X = 4
    }
    console.log(`PLAYER * ${playerMoveInfomation} Edge:${player.isTouchingEdge()} player : ${player_tf} X :${X} Y: ${Y}`)
})
function WarningSprite (x: number, y: number) {
    display = game.createSprite(x, y)
    basic.pause(500)
    display.off()
basic.pause(500)
    display.on()
basic.pause(500)
    display.off()
basic.pause(500)
    display.on()
}
input.onButtonPressed(Button.AB, function () {
    Bombs.forEach((bombsXY) => {
        console.log(IsMinePlaced({x:X,y:Y}))
        if(IsMinePlaced({x:X,y:Y})) return;
        //爆弾があるかここでしらべてくれる
        console.log(`Bombs : ${bombsXY.x},${bombsXY.y}`)
        if(bombsXY.x === X && bombsXY.y === Y){
            basic.showString('Game Over')
        } else {
           if (bombsXY.x === X + 1 || bombsXY.x === X - 1 || bombsXY.y === Y - 1 || bombsXY.y === Y - 1) {
                game.createSprite(X, Y)
             console.log('G * Warning! Bombs are sekkin! LeftBombs : '+BombsCountUp)
            //    WarningSprite(X,Y)
            basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
               BombsAreOK.push(bombsXY)
               BombsCountUp++
            } else {
                game.createSprite(X, Y)
                BombsAreOK.push(bombsXY)
                BombsCountUp = BombsCountUp + 1
            }
        }
    })
})
input.onButtonPressed(Button.B, function () {
    if (playerMoveInfomation == "DEFO") {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        return;
    }
    if (playerMoveInfomation == "YDeg") {
        player.turn(Direction.Right, 90)
        console.log(`LOG * DEG 90`)
playerMoveInfomation = "XDeg"
    }
    if (player_tfY) {
        Y += 1
        player.move(1)
    } else {
        Y += -1
        player.move(-1)
    }
    if (Y < 0) {
        player_tfY = true
        Y = 0
    }
    if (Y > 4) {
        player_tfY = false
        Y = 4
    }
    console.log(`PLAYER * ${playerMoveInfomation} Edge:${player.isTouchingEdge()} player : ${player_tf} X :${X} Y: ${Y}`)
})
function BombsDisplay () {
	
}
function Init () {
    MakeBombs(RandomBombs(difficult))
    BombsDisplay()
}
let atFirst = false
let displayLEDs = 0
let y2 = 0
let x2 = 0
let player_tfY = false
let playerMoveInfomation = ""
let _deg = 0
let player: game.LedSprite = null
let BombsAreOK : Array<BombXY> = []
let Bombs : BombXY[] = []
let x22 = 0
let y22 = 0
let d = 0
let BombsCountUp :number = 0
let player_tf = false
let X = 0
let Y = 0
let displayLEDs2 = 0
let display: game.LedSprite = null
function IsMinePlaced (bombsxy : BombXY) : boolean {
    console.log(bombsxy)
    let value : boolean;
    for(const bombs2 of BombsAreOK) {
        if(bombs2.x === bombsxy.x && bombs2.y === bombsxy.y) value = true
        else value = false
    }
    return value
}
playerMoveInfomation = "DEFO"
type PlayerMoveInfomationTypes = "XDeg"|"YDeg"|"DEFO"
player_tf = true
player_tfY = true
let defX = 2
let defY = 4
X = 2
Y = 4
player = game.createSprite(defX, defY)
let difficult = "hard"
type Difficult = "easy"|"normal"|"hard"|"debug"
function RandomBombs(difficult : Difficult): number{
    let BombsCount : number = 0
    switch(difficult as Difficult){
        case "easy":
         return BombsCount = 2
        break;
        case "normal":
          return BombsCount = 4
        break;
        case "hard":
         return BombsCount = 20
         break;
        case "debug":
         return BombsCount = 1
        break;
    }
    //return BombsCount
}
type BombXY = { x: number , y:number}
basic.forever(function () {
    if (atFirst == false) {
        Init()
        atFirst = true
    }
})
basic.forever(function () {
    GameClear()
    basic.pause(1000)
})
