'use strict';

function wordsInCommon(words1, words2) {
  const words1_set = new Set(words1);
  const words2_set = new Set(words2);

  const result = new Set();

  for (const word of words1_set) {
    if (words2_set.has(word)) {
      result.add(word)
    }
  }
  return new Array(result)
}

function kidsGame(names) {
  const output = [names.shift()]
  console.log(output)
  const first_letter_to_words = {}

  for (const name of names) {
    if (first_letter_to_words.hasOwnProperty(name[0])) {
      first_letter_to_words[name[0]].push(name);
    } else {
      first_letter_to_words[name[0]] = [name];
    }
  }
  
  while (true) {
    let start_letter = output[output.length-1].slice(-1);

    if (first_letter_to_words[start_letter].length == 0) {
      break;
    }
    let word = first_letter_to_words[start_letter].shift()
    output.push(word);
  }

  return output;
}

console.log(kidsGame(["bagon", "baltoy",'yee', "yamask", "starly", "nosepass", "kalob", "nicky", "booger",'rwenorf','ewdfdsfvds']))