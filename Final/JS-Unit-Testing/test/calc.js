var calc = require('../src/calc');
var expect = require('expect.js');


describe('calc suite', function () {

    it('1+2=3', function () {
        expect(3).to.equal(calc.add(1, 2));
    })
    it('1-2=-1', function () {
        expect(-1).to.equal(calc.sub(1, 2));
    })

});