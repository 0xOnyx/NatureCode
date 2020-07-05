

import RealObject from "./object.js"


class Emulate{
  constructor(canvas, interval){
    this.canvas = canvas
    this.object = []
    this.interval = interval
    this.loop()
  }

  addObject(masse, g, angle ){
    let object = new RealObject(masse, g, angle )
    this.object.push(object)
  }

  addVectorObject(id, vector){
    this.object[id].forceInfo.push(vector)
  }

  maj(){
    for(let i = 0 ; i < this.object.length ; i++){
      this.object[i].calcul()
    }
  }



/*
  writeVector(){
    for(let i = 0 ; i < this.object ; i++){
      this.object[i].
      this.canvas.strokeStyle = "red"
      this.canvas.beginPath()
      this.canvas.moveTo()
    }
  }*/

  write(){

    for(let i = 0 ; i < this.object.length ; i ++){
      let {x, y, rayon} = this.object[i]
      y = y + 500
      x = x + 500
      console.log(`x: ${x}, y: ${y}`)
      this.canvas.beginPath()
      this.canvas.arc(x, y, rayon, 0, 2 * Math.PI )
      this.canvas.fill()

      //this.canvas.fillRect(x, y, rayon, rayon)
    }

  }


  loop(){
    setInterval(()=>{
      this.maj()
      this.write()
    }, this.interval)
  }
}

export default Emulate
