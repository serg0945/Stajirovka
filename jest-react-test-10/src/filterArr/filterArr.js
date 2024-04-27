const filterArr = (a, b, c) => {
  return [a, b, c].filter(a => Number.isInteger(a))
}

module.exports = filterArr
