/*
empty orbital ==>  [0,0] ;
half full orbital ==> [1,0] ;
full orbital ==> [1,1]
* */
const {flatten} = require('lodash')

const numberOfOrbitals = (n, l = []) => {

    let x = n - 1;
    while (x >= 0) {
        let z = x--;
        l.push(z)
    }
    l.reverse();
    return l

};

const orbitalTypes = (l) => {
    switch (l) {

        case 0:
            return "s";

        case 1:
            return "p";

        case 2:
            return "d";

        case 3:
            return "f";

        case 4:
            return "g";

        case 5:
            return "h";

        case 6:
            return "i";
        case 7 :
            return "j"

        default:
            return null
    }
};

const orbitalValues = (subshell) => {
    switch (subshell) {

        case "s":
            return 0;

        case "p":
            return 1;

        case "d":
            return 2;

        case "f":
            return 3;

        case "g":
            return 4;

        case "h":
            return 5;

        case "i":
            return 6;
        case "j" :
            return 7

        default:
            return null
    }
};


const totalSquares = (l) => {
    return 2 * l + 1
};

const possibleElectrons = (l, Q = []) => {
    let x = 2 * (2 * l + 1);
    while (x > 0) {
        let z = x--;
        Q.push(z)
    }
    Q.reverse();
    return Q
};

const magneticNumbers = (l, ml = new Map(), o = [0, 0]) => {

    let i;

    for (i = -l; i <= l; i++) {

        ml.set(i, o)

    }
    return ml
};

const principalQuantumNumber = (subshell) => {
    return parseInt(subshell.substr(0, 1), 10)
};

const angularQuantumNumber = (subshell) => {
    return orbitalValues(subshell.substr(1))
}

const subShellEnergy = (subshell) => {

    let n = principalQuantumNumber(subshell)
    let l = angularQuantumNumber(subshell)

    return n + l
};

const sortSubShell = (a, b) => {


    let a1 = subShellEnergy(a)
    let b1 = subShellEnergy(b)

    let a2 = principalQuantumNumber(a)
    let b2 = principalQuantumNumber(b)

    if (a1 > b1) {
        return -1;

    } else if (b1 > a1) {
        return 1

    } else if (b2 > a2) {
        return 1
    } else if (a2 > b2) {
        return -1
    } else {
        return 0
    }
};

const subShellSequence = () => {
    n = [1, 2, 3, 4, 5, 6, 7, 8];


    let seq = n.map((npar) => numberOfOrbitals(npar).map((lpar) => {


        let x = npar + orbitalTypes(lpar)

        return x
    }));
    let z = flatten(seq)
    let newSeq = z.sort(sortSubShell)
    return newSeq.reverse()

};


module.exports = {
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

};


