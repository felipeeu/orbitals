import React from 'react'


const {subShellSequence, fillOrbitals} = require('../orbitals')

const styles = {
    distribution: {
        margin: "15px",
        display: "grid",
        gridTemplateColumns: "25% 25% 25% 25%"
    }
};


export const Distribution = (props) => {
    const {electron} = props;


    return (
        <div style={styles.distribution}>


            {fillOrbitals(electron).map((number, index) =>
                <h1 key={index}>
                    {subShellSequence()[index]} <sup>{number}</sup>
                </h1>
            )}

        </div>
    )

};

