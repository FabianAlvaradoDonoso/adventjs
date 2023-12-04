function decode(message) {
  function reverseText(text) {
    let anidado = [...text]
    anidado.pop()
    anidado.shift()
    return anidado.reverse().join('')
  }

  let texto = message
  const patron = /\(([^()]*|\([^()]*\))*\)/g
  const coincidencias = texto.match(patron)

  if (coincidencias) {
    coincidencias.forEach((contenidoEntreParentesis) => {
      let contenido = [...contenidoEntreParentesis]
      contenido.pop()
      contenido.shift()

      let contenidoJunto = contenido.join('')
      let contenidoAnidado = contenidoJunto.match(patron)

      if (contenidoAnidado) {
        contenidoAnidado.forEach((contenidoAnidoItem) => {
          const anidado = reverseText(contenidoAnidoItem)
          contenidoJunto = contenidoJunto.replace(contenidoAnidoItem, anidado)
        })
      }

      contenido = [...contenidoJunto].reverse().join('')
      texto = texto.replace(contenidoEntreParentesis, contenido)
    })
  }

  return texto
}

module.exports = decode
