import React, {Component} from 'react';
import './App.css';
import AllOrbitals from './components/AllOrbitals.js'



class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Distribuição Eletrônica</h1>
                </header>
                <AllOrbitals/>
            </div>
        );
    }
}

export default App;
