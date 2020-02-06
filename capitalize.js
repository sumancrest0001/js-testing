
function capitalizeString(string) {
  if (typeof string !== 'string') return false
  return string.charAt(0).toUpperCase() + string.slice(1)
}

module.exports = capitalizeString;