const camelCase = (element) => {
  if (typeof element === 'object') {
    return element.map(x => x.slice(0, 1).toUpperCase() + x.slice(1, x.length).toLowerCase())
  }
  else {
    return element.slice(0, 1).toUpperCase() + element.slice(1, element.length).toLowerCase()
  }
}

module.exports.camelCase = camelCase