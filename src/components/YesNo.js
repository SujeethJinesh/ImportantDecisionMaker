import React, { Component } from 'react';

class YesNo extends Component {
    constructor(props) {
        super(props);
        this.state = { result: '' }
    }

    componentWillMount() {
        const result = this.calculateResult();
        this.setState({ result: result })
    }

    calculateResult() {
        return Math.random() < 0.5 ? 'Yes' : 'No'
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        {this.state.result}
                    </p>
                </header>
            </div>
        );
    }
}

export default YesNo;
