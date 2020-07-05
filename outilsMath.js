
//2 * pi = 360°
function degreToRadian(angle) {
  return angle * (Math.PI / 180)
}

function radianToDegre(radian){
  return  radian * (180 / Math.PI)
}

function pythagore(a, b){
  return Math.sqrt((a*a) + (b*b))
}

function toCordonnateX(angle, hyp){
  let angleRadian = degreToRadian(angle)

  let cos = Math.cos(angleRadian)
  let adj = cos * hyp

  return adj
}


function toCordonnateY(angle , hyp){
  let angleRadian = degreToRadian(angle)

  let sin = Math.sin(angleRadian)
  let opp = sin * hyp
  return opp
}

function toPolaireAngle(opp, adj){
  let tan = opp / adj
  let angleRadian = Math.atan(tan)
  let angle = radianToDegre(angleRadian)
  console.log(`${Math.floor(angle)}°`)
  return angle
}

export {pythagore, toCordonnateX, toCordonnateY, toPolaireAngle}
