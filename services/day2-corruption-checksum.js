module.exports = {
    maxMinChecksum: maxMinChecksum,
    evenlyDivisibleChecksum: evenlyDivisibleChecksum
}

/**
 * Calculate the checksum of the given spreadsheet by adding the difference between the highest and the lowest value
 * of every row.
 * @param spreadsheet the data to process
 * @returns {number} the checksum
 */
function maxMinChecksum(spreadsheet) {
    return _checksum(spreadsheet, _maxMinDifference)
}

/**
 * Calculate the checksum of the given spreadsheet by adding the result of the division of the two values in the array
 * that can be divided into a whole number.
 * @param spreadsheet the data to process
 * @returns {number} the checksum
 */
function evenlyDivisibleChecksum(spreadsheet) {
    return _checksum(spreadsheet, _evenlyDivisibleValues)
}

/**
 * Calculate the checksum of the given spreadsheet by applying the given function to every rows.
 * @param spreadsheet the data to process
 * @param apply the function that calculate the checksum of the given row
 * @returns {number} the checksum
 */
function _checksum(spreadsheet, apply) {
    let checksum = 0

    spreadsheet.split("\n").forEach(row => {
        checksum += _processRow(row, apply)
    })

    return checksum
}

/**
 * Process the given row by applying the given function on it.
 * @param row the row to process
 * @param apply the function that calculate the checksum of the given row
 * @returns {number} calculated difference
 */
function _processRow(row, apply) {
    let rowArr = row.split("\t")
    return apply(rowArr)
}

/**
 * Calculate the difference between the highest and lowest value of an array.
 * @param rowArr an array of values
 * @returns {number} the calculated difference
 */
function _maxMinDifference(rowArr) {
    return Math.max(...rowArr) - Math.min(...rowArr)
}

/**
 * Calculate the result of the division of the two values in the array that can be divided into a whole number.
 * @param rowArr an array of values
 * @returns {number} the result of the division
 */
function _evenlyDivisibleValues(rowArr) {
    for(let i=0; i < rowArr.length - 1; i++) {
        for(let j=i+1; j < rowArr.length; j++) {
            if(rowArr[i] % rowArr[j] === 0) {
                return rowArr[i] / rowArr[j]
            }
            if(rowArr[j] % rowArr[i] === 0) {
                return rowArr[j] / rowArr[i]
            }
        }
    }
    return 0
}