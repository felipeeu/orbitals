import React from 'react'
import {times} from 'lodash';

const styles = {
    svg: {
        width: 40,
        height: 40,

    },
    rect: {
        width: 40,
        height: 40,
        fill: "none",
        stroke: "black"
    }
};


export const Square = (props) => {
    const {angular} = props; // angular quantum number
    let idx = 0;

    return (<div> {
            times(angular, () =>
                (angular <= 7) ?  // to not appear g , h , i ... orbitals

                    <svg key={idx} style={styles.svg}>
                        {idx++}
                        <rect style={styles.rect}/>
                    </svg> : null)
        }</div>
    )
};


