import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class YesNo extends Component {
    constructor(props) {
        super(props);
        this.state = { result: '' }
        this.onNavigateHome = this.onNavigateHome.bind(this);
    }

    componentWillMount() {
        const result = this.calculateResult();
        this.setState({ result: result })
    }

    calculateResult() {
        return Math.random() < 0.5 ? 'Yes' : 'No'
    }

    onNavigateHome() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        {this.state.result}
                    </p>
                    <Button bsStyle="primary" bsSize="large" onClick={this.onNavigateHome}>
                        Home
                    </Button>
                </header>
            </div>
        );
    }
}

export default YesNo;
