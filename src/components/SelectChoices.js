import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SelectChoices extends Component {
    constructor() {
        super();
        this.onNavigateHome = this.onNavigateHome.bind(this);
    }

    onNavigateHome() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        SelectChoices
                    </p>
                    <Button bsStyle="primary" bsSize="large" onClick={this.onNavigateHome}>
                        Home
                    </Button>
                </header>
            </div>
        );
    }
}

export default SelectChoices;
