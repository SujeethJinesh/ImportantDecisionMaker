import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Button bsStyle="primary" bsSize="large" onClick={this.onNavigateYesNo}>
                    Quick Yes/No option
                    </Button>
                    <Button bsStyle="primary" bsSize="large" onClick={this.onNavigateDiffOptions}>
                    Choose between different options
                    </Button>
                </header>
                <p>test</p>
            </div>
        );
    }
}

export default Home;
