/* 
Using javascript/typescript, return all possible letter combinations that a phone button
from 2-9 represents. The order of the answer does not matter.
1 2abc 3def
4ghi 5jkl 6mno
7pqrs 8tuv 9wxyz
a. Example 1:
■ Input: “23”
■ Output: [“ad”,”ae”,”af”,”bd”,”be”,”bf”,”cd”,”ce”,”cf”]
b. Example 2:
■ Input: “”
■ Output: []
c. Example 3:
■ Input: “2”
■ Output: [“a”,”b”,”c”]
*/

function letterCombinations(num) {
    const numMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }

    const result = []

    function backtrack(index, currentCombination) {
        if (index === num.length) {
            result.push(currentCombination)
            return
        }

        const currentNum = num[index]
        const letters = numMap[currentNum] || []

        for (let i = 0; i < letters.length; i++) {
            const letter = letters[i]
            backtrack(index + 1, currentCombination + letter)
        }
    }

    if (num) {
        backtrack(0, '')
    }

    return result
}

module.exports = letterCombinations 