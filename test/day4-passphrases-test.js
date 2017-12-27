const day4 = require('../services/day4-passphrases')
const {expect} = require('chai')
const fs = require("fs")

const input = fs.readFileSync("data/day4/day4-passphrases.txt").toString()

describe('Advent of code - Day 4', function() {

    describe('Part 1', function() {

        describe('Resolve examples', function () {
            let tests = [
                {"passphrase": "aa bb cc dd ee", "result": 1},
                {"passphrase": "aa bb cc dd aa", "result": 0},
                {"passphrase": "aa bb cc dd aaa", "result": 1}
            ];

            tests.forEach(test => {
                it(`should resolve captcha = ${test.passphrase}`, function () {
                    expect(day4.countValidNoDuplicates(test.passphrase)).to.equal(test.result)
                });
            })
        })

        it(`should resolve first question`, function () {
            expect(day4.countValidNoDuplicates(input)).to.equal(477)
        });
    })

    describe('Part 2', function() {

        describe('Resolve examples', function () {
            let tests = [
                {"passphrase": "abcde fghij", "result": 1},
                {"passphrase": "abcde xyz ecdab", "result": 0},
                {"passphrase": "a ab abc abd abf abj", "result": 1},
                {"passphrase": "iiii oiii ooii oooi oooo", "result": 1},
                {"passphrase": "oiii ioii iioi iiio", "result": 0}
            ];

            tests.forEach(test => {
                it(`should resolve captcha = ${test.passphrase}`, function () {
                    expect(day4.countValidNoAnagrams(test.passphrase)).to.equal(test.result)
                });
            })
        })

        it(`should resolve second question`, function () {
            expect(day4.countValidNoAnagrams(input)).to.equal(167)
        });
    })
});
