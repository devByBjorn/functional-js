import words from 'an-array-of-english-words'
import R from 'ramda'

console.time('findAnagrams')
const arrayToSortedString = array =>
  array.slice().sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
  }).join()


const findAnagrams = (word, allWords) => {
  const letters = word.split('')
  const wordSorted = arrayToSortedString(letters)

  const anagrams = allWords.filter(oneWord => {
    const oneWordLetters = oneWord.split('')
    const oneWordSorted = arrayToSortedString(oneWordLetters)

    if (oneWord.length === word.length) {
      return oneWord !== word && oneWordSorted === wordSorted
    } else {
      return
    }
  })

  return anagrams
}

console.log(findAnagrams('cinema', words))
console.timeEnd('findAnagrams')

///
console.time('findAnagrams2')
const countOccurrences = array =>
  array.reduce((acc, item) => {
    const count = acc[item] | 0
    return {
      ...acc,
      [item]: count + 1,
    }
  }, {})

const hasSameOccurrences = (word1, word2) => {
  const word1Count = countOccurrences(word1.split(''))
  const word2Count = countOccurrences(word2.split(''))

  return Object.keys(word1Count).length === Object.keys(word2Count).length
    && Object.keys(word1Count).every(letter => word1Count[letter] === word2Count[letter])
}


const findAnagrams2 = (word, allWords) => {
  return allWords.filter(entry => hasSameOccurrences(word, entry))
    .filter(anagram => anagram !== word)
}

console.log(findAnagrams2('cinema', words))

console.timeEnd('findAnagrams2')