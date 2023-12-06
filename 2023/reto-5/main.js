function cyberReindeer(road, time) {
  const result = []

  const barrerasTiempo = 5
  let caracterGuardado = ''
  let roadArray = [...road]

  const indexsBarrera = []
  let algoMas = [...road].forEach((item, index) => {
    if (item === '|' || item === '*') {
      indexsBarrera.push(index)
    }
  })

  for (let i = 0; i < time; i++) {
    // estado inicial
    if (i === 0) {
      result.push(roadArray.join(''))
      continue
    }

    // a los 5 segundos se abren todas las barreras '|' => '*'
    if (i === barrerasTiempo + 1) {
      roadArray = roadArray.map((chr) => (chr === '|' ? '*' : chr))
    }

    // buscar trineo 'S' en road
    const trineoIndex = roadArray.indexOf('S')

    // Reemplazar la siguiente posicion por 'S' si no es una barrera cerrada '|'
    caracterGuardado = roadArray[trineoIndex + 1]

    if (roadArray[trineoIndex + 1] !== '|' || i >= barrerasTiempo) {
      roadArray[trineoIndex + 1] = 'S'
      roadArray[trineoIndex] = '.'
    }

    indexsBarrera.forEach((item, index) => {
      if (roadArray[item] !== 'S') {
        roadArray[item] = i >= barrerasTiempo ? '*' : '|'
      }
    })

    result.push(roadArray.join(''))
  }

  return result
}

module.exports = cyberReindeer
