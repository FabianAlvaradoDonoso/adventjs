function findNaughtyStep(original, modified) {
  if (original === modified) return ''

  const words = []

  if (modified.length >= original.length) {
    ;[...modified].forEach((character, index) => {
      if (index >= original.length) words.push(character)
      if ([...original][index] !== character) words.push(character)
    })
  } else {
    ;[...original].forEach((character, index) => {
      if ([...modified][index] !== character) words.push(character)
    })
  }

  return words[0]
}

module.exports = findNaughtyStep
