/*
empty orbital ==>  [0,0] ;
half full orbital ==> [1,0] ;
full orbital ==> [1,1]
* */

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

const magneticNumbers = (l, ml = new Map(), o = [0,0]) => {

    let i;

    for (i = -l; i <= l; i++) {

        ml.set(i , o)

    }
    return ml
};

module.exports = {
    numberOfOrbitals,
    orbitalTypes,
    totalSquares,
    possibleElectrons,
    magneticNumbers
};


