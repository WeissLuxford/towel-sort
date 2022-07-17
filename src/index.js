module.exports = function towelSort (...matrix) {
  const lo = [] 
  const valuePusher = (prop) => {
    for (const key of prop) {
      lo.push(key)
    }
  }
  matrix.forEach((key) => key.forEach((value, index) => {
    if ( index % 2 !== 0) {
      value.reverse()
      valuePusher(value)
    } else{
      valuePusher(value)
    }
}) )
return lo
}
