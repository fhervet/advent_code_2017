const day2 = require('../services/day2-corruption-checksum')
const {expect} = require('chai')
const fs = require("fs")

const example1 = fs.readFileSync("data/day2/day2-corruption-checksum-example1.txt").toString()
const example2 = fs.readFileSync("data/day2/day2-corruption-checksum-example2.txt").toString()
const input = fs.readFileSync("data/day2/day2-corruption-checksum.txt").toString()

describe('Advent of code - Day 2', function() {

    describe('Part 1', function() {

        it(`should resolve example`, function () {
            expect(day2.maxMinChecksum(example1)).to.equal(18)
        })

        it(`should resolve first question`, function () {
            expect(day2.maxMinChecksum(input)).to.equal(41919)
        })
    })

    describe('Part 2', function() {

        it(`should resolve example`, function () {
            expect(day2.evenlyDivisibleChecksum(example2)).to.equal(9)
        })

        it(`should resolve second question`, function () {
            expect(day2.evenlyDivisibleChecksum(input)).to.equal(303)
        })
    })
});
