import React from 'react'


export const magneticNumber = (l, ml =[]) => {

    let i;

    for (i = -l; i <= l; i++) {
        ml.push(i)

    }
    return <div>{ml}</div>
};
