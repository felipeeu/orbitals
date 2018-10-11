const
    {
        numberOfOrbitals,
        orbitalTypes,
        orbitalValues,
        totalSquares,
        possibleElectrons,
        magneticNumbers,
        principalQuantumNumber,
        angularQuantumNumber,
        subShellEnergy,
        sortSubShell,
        subShellSequence,
        fillOrbitals,
        distribution

    }
        = require('./orbitals');


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

describe('orbital Values', () => {

    it('s orbital ', () => {
        expect(orbitalValues("s")).toEqual(0)
    });
    it('p orbital', () => {
        expect(orbitalValues("p")).toEqual(1)
    });
    it('d orbital', () => {
        expect(orbitalValues("d")).toEqual(2)
    });
    it('sem orbital', () => {
        expect(orbitalValues("i")).toEqual(6)
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
        expect(possibleElectrons(0)).toEqual(2)
    });
    it('case l = 3 ', () => {
        expect(possibleElectrons(3)).toEqual(14)
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


describe('Principal quantum number', () => {

    it('case 3d ', () => {
        expect(principalQuantumNumber("3d")).toEqual(3)
    });
    it('case 5d ', () => {
        expect(principalQuantumNumber("5d")).not.toEqual(8)
    });
});

describe('Angular quantum number', () => {

    it('case 3d ', () => {
        expect(angularQuantumNumber("3d")).toEqual(2)
    });
    it('case 5d ', () => {
        expect(angularQuantumNumber("5d")).not.toEqual(8)
    });
});


describe('subshell sequence', () => {

    it('Total sequence  ', () => {
        expect(subShellSequence()).toEqual( ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p", "8s", "5g", "6f", "7d", "8p", "6g", "7f", "8d", "6h", "7g", "8f", "7h", "8g", "7i", "8h", "8i", "8j"])
    });

});


describe('sort subshells ', () => {

    it('case  4p / 5s  ', () => {
        expect(sortSubShell("4p", "5s")).toEqual(1)
    });

    it('case  4s / 3d  ', () => {
        expect(sortSubShell("4s", "3d")).toEqual(1)
    });
});


describe('subshell energy', () => {

    it('case 4s ', () => {
        expect(subShellEnergy("4s")).toEqual(4)
    });
    it('case 6d ', () => {
        expect(subShellEnergy("6d")).toEqual(8)
    });
    it('case 3p ', () => {
        expect(subShellEnergy("3p")).not.toEqual(8)
    });
});


describe('filling orbitals', () => {

    it('case 0 electrons ', () => {
        expect(fillOrbitals(0)).toStrictEqual([])
    });

    it('case 1 electrons ', () => {
        expect(fillOrbitals(1)).toStrictEqual([1])
    });

    it('case 2 electrons ', () => {
        expect(fillOrbitals(2)).toStrictEqual([2])
    });

    it('case 3 electrons ', () => {
        expect(fillOrbitals(3)).toStrictEqual([2,1])
    });

    it('case 17 electrons ', () => {
        expect(fillOrbitals(17)).toStrictEqual([2, 2, 6, 2, 5])
    });

    it('fail 17 electrons ', () => {
        expect(fillOrbitals(17)).not.toEqual([2, 2, 6, 2, 6, 2])
    });
    it('case 35 electrons ', () => {
        expect(fillOrbitals(35)).toStrictEqual([2, 2, 6, 2, 6, 2, 10, 5])
    });

});

describe ('distribution', ()=> {

   it('case 0 electrons', () => {
        expect(distribution(0)).toEqual( [])
    });

    it('case 1 electrons', () => {
        expect(distribution(1)).toEqual( ["1s1"])
    });

    it('case 2 electrons', () => {
        expect(distribution(2)).toEqual( ["1s2"])
    });

    it('case 3 electrons', () => {
        expect(distribution(3)).toEqual( ["1s2", "2s1"])
    });

    it('case 12 electrons', () => {
        expect(distribution(12)).toEqual( ["1s2", "2s2", "2p6", "3s2"])
    });

    it('case 23 electrons', () => {
        expect(distribution(23)).toEqual( ["1s2", "2s2", "2p6", "3s2", "3p6", "4s2", "3d3"])
    })
});
