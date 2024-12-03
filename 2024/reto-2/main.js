function createFrame(names) {
  const maxLength = Math.max(...names.map((i) => i.length))
  const topBottomFrame = '*'.repeat(maxLength + 4)
  const middleFrame = names.map((i) => `* ${i.padEnd(maxLength, ' ')} *`)
  const middleFrameString = middleFrame.join('\n')
  const frame = [topBottomFrame, middleFrameString, topBottomFrame]
  return frame.join('\n')
}

module.exports = createFrame
