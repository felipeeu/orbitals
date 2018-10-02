import React, {Component} from 'react'
import Orbital from './Orbital'


class AllOrbitals extends Component {



    renderOrbital(n) {
        return <Orbital value={n}/>;
    }

    render() {
        return (
            <div>
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
};

export default AllOrbitals
