import React, {Component} from 'react'
import Orbital from './Orbital'
import {Distribution} from "./Distribution";


const styles = {
    input: {
        margin: "15px",
        fontSize: "46px"
    }
};

class AllOrbitals extends Component {


    state = {
        electron: 0
    };

    putElectrons = (e) => {
        this.setState({electron: e.target.value})
    };

    renderOrbital = (n) => {
        return <Orbital principalQN={n}/>;
    };

    render() {
        return (
            <div>
                <input onChange={this.putElectrons}
                       style={styles.input}
                       type="number"
                       value={this.state.electron}
                       min={0}/>

                <Distribution electron={this.state.electron}/>


            </div>

        )
    }
}

export default AllOrbitals
