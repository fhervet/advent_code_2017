module.exports = {
    countValidNoDuplicates: countValidNoDuplicates,
    countValidNoAnagrams: countValidNoAnagrams
}

/**
 * Count the number of valid passphrases. A passphrase is valid when it contains no duplicated word.
 * @param input the passphrases to check
 * @return {number} the number of valid passphrases in the given input
 */
function countValidNoDuplicates(input) {
    return _countValid(input, _containsNoDuplicate)
}

/**
 * Count the number of valid passphrases. A passphrase is valid when it contains no anagram.
 * @param input the passphrases to check
 * @return {number} the number of valid passphrases in the given input
 */
function countValidNoAnagrams(input) {
    return _countValid(input, _containsNoAnagram)
}

/**
 * Count the number of valid passphrases. A passphrase is validated by the given function.
 * @param input the passphrases to check
 * @param apply the function that validates the given passphrase
 * @return {number} the number of valid passphrases in the given input
 */
function _countValid(input, apply) {
    let count = 0

    input.split("\n").forEach(row => {
        if(apply(row)) {
            count += 1
        }
    })

    return count
}

/**
 * Check if the passphrase contains no duplicated word.
 * @param input the passphrase to check
 * @return {boolean} <code>true</code> if there is no duplicates, <code>false</code> otherwise
 */
function _containsNoDuplicate(passphrase) {
    let words = passphrase.split(" ")
    return words.length === new Set(words).size
}

/**
 * Check if the passphrase contains no anagram.
 * @param input the passphrase to check
 * @return {boolean} <code>true</code> if there is no anagrams, <code>false</code> otherwise
 */
function _containsNoAnagram(passphrase) {
    let words = passphrase.split(" ")
    let sortedWords = words.map(word => Array.from(word).sort().join(""))
    return sortedWords.length === new Set(sortedWords).size
}