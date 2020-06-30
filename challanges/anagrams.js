import words from 'an-array-of-english-words'

export const countOccurrences = array =>
  array.reduce((acc, item) => {
    const count = acc[item] | 0
    return {
      ...acc,
      [item]: count + 1,
    }
  }, {})

export const hasSameOccurrences = (word1, word2) => {
  const word1Count = countOccurrences(word1.split(''))
  const word2Count = countOccurrences(word2.split(''))

  return Object.keys(word1Count).length === Object.keys(word2Count).length
    && Object.keys(word1Count).every(letter => word1Count[letter] === word2Count[letter])
}

export const findAnagrams = (word, allWords) => {
  return allWords.filter(entry => hasSameOccurrences(word, entry))
    .filter(anagram => anagram !== word)
}

console.log(findAnagrams('cinema', words))