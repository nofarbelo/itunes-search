import React from 'react';
import List from './List'
import NoResults from './NoResults'

class Results extends React.PureComponent {

    constructor(props) {
        super(props)
    }   

    render() {
        const { data } = this.props;
        if (!data) {
            return ""
        }
        return (
            <div>
                {data.length > 0 ? <List results={data}/> : <NoResults/>}
            </div>
        )
    }
}

export default Results;