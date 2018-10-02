import React, {Component} from 'react'
import {numberOfOrbitals} from './NumOfOrbitals'
import magneticNumber from './magneticNumber'


const styles = {
    orbital: {
        display: "grid",
        gridTemplateColumns: "5% 5% 15% 15% 25% 5% 5% 5%"
    }
};


class Orbital extends Component {
    render() {
        return (
            <div style={styles.orbital}>
                {this.props.value} --- {magneticNumber(this.props.value)}
            </div>
        )
    }
};

export default Orbital
