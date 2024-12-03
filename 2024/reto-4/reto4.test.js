const organizeInventory = require('./main.js')

test('Test #01 - Returns type', () => {
  expect(typeof organizeInventory({})).toBe('object')
})

test('Test #02 - organizeInventory([])', () => {
  expect(organizeInventory([])).toStrictEqual({})
})

test('Test #03 - organizeInventory([{ name: "doll", quantity: 5, category: "toys" }])', () => {
  expect(
    organizeInventory([{ name: 'doll', quantity: 5, category: 'toys' }])
  ).toStrictEqual({
    toys: {
      doll: 5
    }
  })
})

test('Test #04 - organizeInventory([{ name: "book", quantity: 10, category: "education" }, { name: "book", quantity: 5, category: "education" }, { name: "paint", quantity: 3, category: "art" }])', () => {
  expect(
    organizeInventory([
      { name: 'book', quantity: 10, category: 'education' },
      { name: 'book', quantity: 5, category: 'education' },
      { name: 'paint', quantity: 3, category: 'art' }
    ])
  ).toStrictEqual({
    education: {
      book: 15
    },
    art: {
      paint: 3
    }
  })
})

test('Test #05 - organizeInventory([{ name: "doll", quantity: 5, category: "toys" }, { name: "car", quantity: 3, category: "toys" }, { name: "ball", quantity: 2, category: "sports" }, { name: "car", quantity: 2, category: "toys" }, { name: "racket", quantity: 4, category: "sports" }])', () => {
  expect(
    organizeInventory([
      { name: 'doll', quantity: 5, category: 'toys' },
      { name: 'car', quantity: 3, category: 'toys' },
      { name: 'ball', quantity: 2, category: 'sports' },
      { name: 'car', quantity: 2, category: 'toys' },
      { name: 'racket', quantity: 4, category: 'sports' }
    ])
  ).toStrictEqual({
    toys: {
      doll: 5,
      car: 5
    },
    sports: {
      ball: 2,
      racket: 4
    }
  })
})
