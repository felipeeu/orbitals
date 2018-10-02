import React from 'react'
import {Square} from './Square'

const {orbitalTypes, totalSquares} = require('../orbitals')

export const numberOfOrbitals = (n, l = []) => {

    let x = n - 1;
    while (x >= 0) {
        let z = x--;
        l.push(z)
    }

    l.reverse();
    return (
        l.map((num) =>
            <div key={num}>
                <Square angular={totalSquares(num)}/>
                <p>{orbitalTypes(num)}</p>
            </div>)
    )

};
