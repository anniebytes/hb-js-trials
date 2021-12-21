'use strict';

// 1. countWords
function countWords(phrase) {
  word_counts = {}
  for (const word of phrase.split(' ')) {
    if (word_counts.hasOwnProperty(word)) {
      word_counts[word] += 1;
    } else {
      word_counts[word] = 1;
    }
  }
  return word_counts;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
}
  for (const melon in melon_prices) {
    if (price == melon_prices[melon]) {
      return melon_prices[melon]
    }
  }
}