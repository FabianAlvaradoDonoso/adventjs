function maxDistance(movements) {
  let derecha = movements.match(/\>/g)?.length ?? 0
  let izquierda = movements.match(/\</g)?.length ?? 0
  let extra = movements.length - derecha - izquierda

  return Math.abs(derecha - izquierda) + extra
}

module.exports = maxDistance
