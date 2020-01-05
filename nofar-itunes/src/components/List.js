
import React from 'react';
import Item from './Item';
import '../styles/List.css';

class List extends React.Component {

    render() {
        return (
        <div className="list-div">
            {this.props.results.map((item, index) => <Item key={item.trackId || index} {...item} />)}
        </div>
        )
    }
}

export default List;