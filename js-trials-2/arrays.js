'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (let i = 0; i < items.length; i++) {
  console.log(`${items[i]}, ${i}`)
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = []
  for (let i = 0; i <items.length; i += 2) {
  result.push(items[i])
}
console.log(result)
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  const sorted_items = items.sort()
  const sorted_n_items = sorted_items.slice(0,n)
  sorted_n_items.reverse()
  console.log(sorted_n_items)
}
