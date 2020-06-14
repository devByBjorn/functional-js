// All recursive functions need to be told then to stop
// If not told when to stoped it will go on for ever

const countDown = (x, min) => {
  if (x < min) return
  console.log(x)
  countDown(x - 1, min)
}

const countUp = (x, max) => {
  if (x > max) return
  console.log(x)
  countUp(x + 1, max)
}

const countUpAndDown = (countUp, countDown) => {
  countUp(1, 9)
  countDown(10, 1)
}

countUpAndDown(countUp, countDown)
