"""Python functions for JavaScript Trials 1."""

def output_all_items(items):
    for item in items: 
        print(item)

def get_all_evens(nums):
    evens = []
    for num in nums: 
        if num % 2 == 0: 
            evens.append(num)
    return evens


def get_odd_indices(items):
    odds = []
    for item in range(len(items)):
        if item % 2 != 0:
            odds.append(item)
    return odds


def print_as_numbered_list(items):
    for i, item in enumerate(items):
        print(f"{i + 1}. {item}")

def get_range(start, stop):
    numbers = []
    for num in range(start,stop): 
        numbers.append(num)


def censor_vowels(word):
    vowels = list('aeiou')
    censored_word = []
    for letter in word: 
        if letter in vowels: 
            censored_word.append("*")
        else:
            censored_word.append(letter)
    return "".join(censored_word)

def snake_to_camel(string):
    camelcase = []
    for word in string.split("_"):
        camelcase.append(word[0].upper())
    return "".join(camelcase)


def longest_word_length(words):
    longest_word = 0
    for word in words:
        if len(word) > longest_word:
            longest_word = len(word)
    return longest_word


def truncate(string):
    truncated_string = []
    for letter in string:
        if len(truncated_string) == 0 or letter != truncated_string[-1]:
            truncated_string.append(letter)
    return "".join(truncated_string)


def has_balanced_parens(string):
    parens = 0
    for char in string:
        if char == "(":
            parens += 1
        elif char == ")":
            parens -= 1
            if parens < 0:
                return False
    return True

def compress(string):
    compressed = []
    currChar = ""
    charCount = 0
    
    for char in string:
        if char != currChar:
            compressed.append(currChar)
            if charCount > 1:
                compressed.append(str(charCount))
            currChar = char
            charCount = 0
        charCount += 1
    
    compressed.append(currChar)
    if charCount > 1:
        compressed.append(str(charCount))

    return "".join(compressed)
