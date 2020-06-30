import { findAnagrams } from '../../challanges/anagrams'

test('should find anagrams in array in comparison to word', () => {
  const words = ['laho', 'lego', 'loha', 'galo', 'hola']
  expect(findAnagrams('hola', words)).toEqual(['laho', 'loha'])
})
