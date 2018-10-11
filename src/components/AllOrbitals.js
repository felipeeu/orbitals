import React, {Component} from 'react'
import Orbital from './Orbital'
import {Distribution} from "./Distribution";


const styles = {
    input: {
        margin: "15px",
        backgroundColor: "pink"
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

                <div> {this.renderOrbital(8)}</div>
                <div> {this.renderOrbital(7)}</div>
                <div> {this.renderOrbital(6)}</div>
                <div> {this.renderOrbital(5)}</div>
                <div> {this.renderOrbital(4)}</div>
                <div> {this.renderOrbital(3)}</div>
                <div> {this.renderOrbital(2)}</div>
                <div> {this.renderOrbital(1)}</div>

            </div>

        )
    }
}

export default AllOrbitals
