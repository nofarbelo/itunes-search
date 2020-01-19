import React from 'react';
import apis from '../api/index'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''};
        this.textInput = React.createRef();
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        apis.insertSearchQuery(this.state.value).then(() => {
            this.props.search(this.state.value);
        });

        event.preventDefault();
    }

    showPopular = () => {
        apis.getPopularSearchQuery(5).then((result) => {
            this.props.setTop(result.data);
        }).catch((err) => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light d-flex justify-content-center">
                <div className="form-inline d-flex  ">
                    <input type="text" value={this.state.value} placeholder="Search" ref={this.textInput}
                            onChange={this.handleChange} className="form-control mr-sm-2"/>
                    <button  className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.showPopular} className="btn btn-primary" style={{margin:"5px"}}>show 10</button>
                </div>
            </nav>
        )
    }
}

export default SearchForm;