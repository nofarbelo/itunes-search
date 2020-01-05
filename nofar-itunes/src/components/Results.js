import React from 'react';
import List from './List'

class Results extends React.PureComponent {

    constructor(props) {
        super(props)
    }   

    render() {
        return (
            <div>
                {this.props.data.length > 0 ? <List results={this.props.data}/> : ""}
            </div>
        )
    }
}

export default Results;