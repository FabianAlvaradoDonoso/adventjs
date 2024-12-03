function organizeInventory(inventory) {
  const organized = {}

  for (const el of inventory) {
    if (!organized[el.category]) {
      organized[el.category] = {}
    }

    if (!organized[el.category][el.name]) {
      organized[el.category][el.name] = 0
    }

    organized[el.category][el.name] += el.quantity
  }

  return organized
}

module.exports = organizeInventory
