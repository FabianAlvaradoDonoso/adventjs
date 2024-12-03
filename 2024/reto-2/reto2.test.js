const createFrame = require('./main.js')

test('Test #01 - Returns type', () => {
  expect(typeof createFrame(['midu'])).toBe('string')
})

test('Test #02 - createFrame(["midu"])', () => {
  expect(createFrame(['midu'])).toStrictEqual(`
      ********
      * midu *
      ********
    `)
})

test('Test #03 - createFrame(["midu", "madeval", "educalvolpz"])', () => {
  expect(createFrame(['midu', 'madeval', 'educalvolpz'])).toStrictEqual(`
      ***************
      * midu        *
      * madeval     *
      * educalvolpz *
      ***************
    `)
})

test('Test #04 - createFrame(["a", "bb", "ccc"])', () => {
  expect(createFrame(['a', 'bb', 'ccc'])).toStrictEqual(`
      "*******
      * a   *
      * bb  *
      * ccc *
      *******"
    `)
})

test('Test #05 - createFrame(["a", "bb", "ccc", "dddd"])', () => {
  expect(createFrame(['a', 'bb', 'ccc', 'dddd'])).toStrictEqual(`
    "********
    * a    *
    * bb   *
    * ccc  *
    * dddd *
    ********"
  `)
})

test('Test #06 - createFrame(["midu", "madeval", "educalvolpz", "midu"])', () => {
  expect(createFrame(['midu', 'madeval', 'educalvolpz', 'midu']))
    .toStrictEqual(`
      "***************
      * midu        *
      * madeval     *
      * educalvolpz *
      * midu        *
      ***************"
    `)
})
