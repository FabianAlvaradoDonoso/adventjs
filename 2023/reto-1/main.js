function findFirstRepeated(gifts) {
  const unique = []
  const repited = []

  gifts.forEach((value) => {
    !unique.includes(value) ? unique.push(value) : repited.push(value)
  })

  return repited.length >= 1 ? repited[0] : -1
}

module.exports = findFirstRepeated
