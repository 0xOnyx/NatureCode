


import {pythagore, toCordonnateX, toCordonnateY, toPolaireAngle} from "./outilsMath.js"
import Force from "./force.js"


class RealObject {                 //masse en KG
  constructor(masse, g, angle){    //g = 9.81  ; angle 270 en degrée
    this.x = 0
    this.y = 0
    this.g = g
    this.rayon = masse
    this.forceInfo = [{g: g, masse: masse, angle: angle}]    //angle + newton
    this.force = []
    this.calcul()

  }

  calcul(){  //Ajout une force a l'object
    //modifie de la force avec this.force
    //force = une longueur + un angle

    for(let i = 0 ; i < this.forceInfo.length ; i ++){
      if(true){
        console.log("ok")
        this.forceInfo[i].g = this.forceInfo[i].g * this.forceInfo[i].g
      }

      this.force[i] = new Force(this.forceInfo[i].masse, this.forceInfo[i].g, this.forceInfo[i].angle )


      let x1 = toCordonnateX(this.force[i].angle , this.force[i].newton)
      let y1 = toCordonnateY(this.force[i].angle , this.force[i].newton)


      console.log(this.forceInfo[i].g)
      console.log(`x: ${x1}, y: ${y1}`)

      this.x = this.x + x1
      this.y = this.y + y1
    }

    let hyp2 = pythagore(this.x, this.y)

    this.force.newton = hyp2
    this.force.angle = toPolaireAngle(this.y , this.x)


  }
}

export default RealObject
