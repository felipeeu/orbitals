import React, {Component} from 'react'
import {numberOfOrbitals} from './NumOfOrbitals'


const styles = {
    orbital: {
        display: "grid",
        gridTemplateColumns: "5% 5% 15% 15% 25% 5% 5% 2.5% 2.5%"
    }
};


class Orbital extends Component {
    render() {
        return (
            <div style={styles.orbital}>
                {this.props.principalQN} --- {numberOfOrbitals(this.props.principalQN)}
            </div>
        )
    }
}

export default Orbital
