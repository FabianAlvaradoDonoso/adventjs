const createXmasTree = require('./main.js')

test('Test #01 - Returns type', () => {
  expect(typeof createXmasTree({})).toBe('string')
})

test('Test #02 - createXmasTree(3,"*")', () => {
  expect(createXmasTree(3, '*')).toStrictEqual(`
      __*__
      _***_
      *****
      __#__
      __#__
    `)
})

test('Test #03 - createXmasTree(3,"*")', () => {
  expect(createXmasTree(5, '+')).toStrictEqual(`
      ____+____
      ___+++___
      __+++++__
      _+++++++_
      +++++++++
      ____#____
      ____#____
    `)
})

test('Test #04 - createXmasTree(6, "@")', () => {
  expect(createXmasTree(6, '@')).toStrictEqual(`
      _____@_____
      ____@@@____
      ___@@@@@___
      __@@@@@@@__
      _@@@@@@@@@_
      @@@@@@@@@@@
      _____#_____
      _____#_____
    `)
})

test('Test #05 - createXmasTree(1, "*")', () => {
  expect(createXmasTree(1, '*')).toStrictEqual(`
      *
      #
      #
    `)
})

test('Test #06 - createXmasTree(6, "#")', () => {
  expect(createXmasTree(6, '#')).toStrictEqual(`
      ___#___
      __###__
      _#####_
      #######
      ___#___
      ___#___
    `)
})
