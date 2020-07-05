
import Emulate from "./Emulate.js"
import Force from "./Force.js"


let canvas = document.getElementById("game")

let context = canvas.getContext("2d")

let emulate = new Emulate(context, 100)




let g = 1.01//9.81
            //Kg  gravité Angle
emulate.addObject(5, g, -90)

emulate.addVectorObject(0, {g:  g, masse: 7, angle: -260})
