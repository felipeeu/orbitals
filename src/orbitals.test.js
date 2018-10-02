const {numberOfOrbitals, orbitalTypes, totalSquares, possibleElectrons, magneticNumbers} = require('./orbitals');


describe('numbers of orbitals', () => {

    it('match orbitals n=6 ', () => {
        expect(numberOfOrbitals(6)).toEqual(expect.arrayContaining([0, 1, 2, 3, 4, 5]))
    });
    it('match orbitals n=5', () => {
        expect(numberOfOrbitals(5)).toEqual(expect.arrayContaining([0, 1, 2, 3, 4]))
    });
    it('not match orbitals n=10', () => {
        expect(numberOfOrbitals(10)).toEqual(expect.arrayContaining([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
    });
    it('not match orbitals n=8', () => {
        expect(numberOfOrbitals(8)).toEqual(expect.arrayContaining([0, 1, 2, 3, 4, 5, 6, 7]))
    })
});


describe('orbital types', () => {

    it('s orbital ', () => {
        expect(orbitalTypes(0)).toEqual("s")
    });
    it('p orbital', () => {
        expect(orbitalTypes(1)).toEqual("p")
    });
    it('d orbital', () => {
        expect(orbitalTypes(2)).toEqual("d")
    });
    it('sem orbital', () => {
        expect(orbitalTypes(8)).toEqual(null)
    })
});


describe('Total Squares', () => {

    it('s orbital ', () => {
        expect(totalSquares(0)).toEqual(1)
    });
    it('p orbital ', () => {
        expect(totalSquares(1)).toEqual(3)
    });
    it('d orbital', () => {
        expect(totalSquares(2)).toEqual(5)
    });
    it('i orbital', () => {
        expect(totalSquares(6)).toEqual(13)
    })
});


describe('possible electrons in subshell', () => {

    it('case l = 0 ', () => {
        expect(possibleElectrons(0)).toEqual(expect.arrayContaining([1, 2]))
    });
    it('case l = 3 ', () => {
        expect(possibleElectrons(3)).toEqual(expect.not.arrayContaining([0, 1, 2]))
    });
});

describe('magnetic quantum numbers', () => {

    const lZero = new Map([[0, [0, 0]]]);

    const lOne = new Map([
        [-1, [0, 0]],
        [0, [0, 0]],
        [1, [0, 0]],]);

    const lThree = new Map([
        [-3, [0, 0]],
        [-2, [0, 0]],
        [-1, [0, 0]],
        [0, [0, 0]],
        [1, [0, 0]],
        [2, [0, 0]],
        [3, [0, 0]]]);


    it('case l = 0 ', () => {
        expect(magneticNumbers(0)).toEqual(lZero)
    });

    it('case l = 1 ', () => {
        expect(magneticNumbers(1)).toEqual(lOne)
    });

    it('case l = 3 ', () => {
        expect(magneticNumbers(3)).toEqual(lThree)
    });
});
