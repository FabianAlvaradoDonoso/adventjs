function maxDistance(movements) {
  let derecha = movements.match(/\>/g)?.length ?? 0
  let izquierda = movements.match(/\</g)?.length ?? 0
  let comodin = movements.match(/\*/g)?.length ?? 0

  let max = Math.max(derecha, izquierda)

  if (derecha === max) {
    derecha += comodin
  } else {
    izquierda += comodin
  }

  return Math.abs(derecha - izquierda)
}

module.exports = maxDistance
