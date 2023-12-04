function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    const union = [...new Set(...[gift + materials])]

    return union.length == materials.length
  })
}

module.exports = manufacture
