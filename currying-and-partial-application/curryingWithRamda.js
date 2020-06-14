import R from 'ramda'

const consoleErrors = []

const log = (date, consoleError, context, solution) => consoleErrors.push({
  date: `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}, ${date.getHours()}:${date.getMinutes()}`,
  consoleError: consoleError || '',
  context: context || '',
  solution: solution || '',
})

const logCurried = R.curry(log)
logCurried(new Date())
  ('Uncaught ReferenceError')
  ('push to array(newArr) in for loop, fogot to decalre newArr with let')
  ('declared newArr using let')

const logWithDate = logCurried(new Date())
logWithDate('FIREBASE FATAL ERROR: Can\'t determine Firebase Database URL. Be sure to include databaseURL option when calling firebase.initializeApp().')
  ('React app with firebase DB and firebase popup login. App deplyed with Netlify. I had not registered the netlify URL in firebase')
  ('Added netlify URL to firebase DB. Firebase project - authentication - login method - autheraised domains - add domain')

console.log(consoleErrors)


const errorsCount = consoleErrors.reduce((acc, x) => {
  const count = acc[x.consoleError] || 0
  return {
    ...acc,
    [x.consoleError]: count + 1
  }
}, {})

console.log(errorsCount)