function createXmasTree(height, ornament) {
  function createSpaces(text, height) {
    let left = text.padStart(height, '_')
    let right = text.padEnd(height, '_')
    return left + right.slice(1)
  }

  function createLogs(height) {
    const log = createSpaces('#', height)
    return log + '\n' + log
  }

  const branchs = []
  const branch = new Array(height).fill(ornament)
  for (let i = 1; i <= height; i++) {
    let branch = ornament.repeat(i)
    branch = createSpaces(branch, height)
    branchs.push(branch)
  }
  const logs = createLogs(height)
  branchs.push(logs)

  return branchs.join('\n')
}

module.exports = createXmasTree
