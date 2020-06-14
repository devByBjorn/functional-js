const names = [
  'Bjorn', 'Anna', 'Bjorn', 'Bjorn', 'Anna', 'Bjorn', 'Anna',
  'Bjorn', 'Bjorn', 'Erik', 'Bjorn', 'Erik', 'Anna', 'Bjorn',
  'Erik', 'Matilda', 'Matilda', 'ERik', 'Matilda', 'Bjorn']

const countEachName = names.reduce((acc, name) => {
  name = name.toLocaleLowerCase()
  const count = acc[name] || 0

  return {
    ...acc,
    [name]: count + 1
  }
}, {})

console.log(countEachName)                                                                        