namespace SpriteKind {
    export const DESECHO = SpriteKind.create()
    export const DROP = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.DESECHO, function (sprite, otherSprite) {
    info.startCountdown(10)
    if (Cargando != 1) {
        Cargando = 1
        basuracarga = otherSprite
    }
})
let basuracarga: Sprite = null
let Cargando = 0
game.splash("Comienza a separar", " los desecho")
game.splash("Care the earth ", "Cuida a la tierra")
scene.setBackgroundImage(assets.image`FONDO`)
let botebasura = sprites.create(assets.image`Bote2`, SpriteKind.DROP)
let Botebasura4 = sprites.create(assets.image`Bote2`, SpriteKind.DROP)
let botebasura1 = sprites.create(assets.image`Bote PÀPEL`, SpriteKind.DROP)
let Botebasura2 = sprites.create(assets.image`Bote1`, SpriteKind.DROP)
let Botebasura3 = sprites.create(assets.image`Bote`, SpriteKind.DROP)
let MIflecha = sprites.create(assets.image`Flecha`, SpriteKind.Player)
let ORGANICO = sprites.create(assets.image`MANZANA`, SpriteKind.DESECHO)
let PAPEL = sprites.create(assets.image`PAPEL`, SpriteKind.DESECHO)
let PLASTICO = sprites.create(assets.image`BOTELLA`, SpriteKind.DESECHO)
let OTROS = sprites.create(assets.image`METAL`, SpriteKind.DESECHO)
ORGANICO.setPosition(130, 27)
OTROS.setPosition(20, 27)
PAPEL.setPosition(60, 27)
Botebasura4.setPosition(130, 85)
botebasura.setPosition(130, 89)
botebasura1.setPosition(20, 85)
Botebasura2.setPosition(60, 85)
Botebasura3.setPosition(90, 85)
PLASTICO.setPosition(90, 27)
MIflecha.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(MIflecha, 100, 100)
info.setLife(1)
info.setScore(0)
forever(function () {
    if (Cargando == 1) {
        basuracarga.setPosition(MIflecha.x, MIflecha.y)
        if (MIflecha.overlapsWith(botebasura)) {
            Cargando = 0
            info.changeScoreBy(1)
            ORGANICO.setPosition(130, 27)
        } else {
            if (ORGANICO.overlapsWith(botebasura1)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(-1)
                info.setLife(-1)
            }
            if (OTROS.overlapsWith(botebasura1)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(-1)
                info.setLife(-1)
            }
            if (PLASTICO.overlapsWith(botebasura1)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(-1)
                info.setLife(-1)
            }
        }
        if (MIflecha.overlapsWith(botebasura1)) {
            PAPEL.setPosition(60, 27)
            Cargando = 0
            info.changeScoreBy(1)
        } else {
            if (PAPEL.overlapsWith(Botebasura2)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(-1)
                info.setLife(-1)
            }
            if (OTROS.overlapsWith(Botebasura2)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(-1)
                info.setLife(-1)
            }
            if (ORGANICO.overlapsWith(Botebasura2)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(-1)
                info.setLife(-1)
            }
        }
        if (MIflecha.overlapsWith(Botebasura2)) {
            PLASTICO.setPosition(90, 27)
            Cargando = 0
            info.changeScoreBy(1)
        } else {
            if (ORGANICO.overlapsWith(Botebasura3)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(-1)
                info.setLife(-1)
            }
            if (PLASTICO.overlapsWith(Botebasura3)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(-1)
                info.setLife(-1)
            }
            if (PAPEL.overlapsWith(Botebasura3)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(-1)
                info.setLife(-1)
            }
        }
        if (MIflecha.overlapsWith(Botebasura3)) {
            OTROS.setPosition(20, 27)
            Cargando = 0
            info.changeScoreBy(1)
        } else {
            if (PAPEL.overlapsWith(Botebasura4)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(0)
                info.setLife(-1)
            }
            if (PLASTICO.overlapsWith(Botebasura4)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(0)
                info.setLife(-1)
            }
            if (OTROS.overlapsWith(Botebasura4)) {
                basuracarga.destroy()
                Cargando = 0
                info.changeScoreBy(0)
                info.setLife(-1)
            }
        }
    }
})
