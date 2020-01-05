import React, { Component } from 'react'
import Results from './Results';
import SearchForm from './Search';
import Top from './Top'

export default class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: [],
            top: []
        }
    }

    Search = async (searchValue) => {

        const limit = 25;
        const itunesURL = `https://itunes.apple.com/search?term=${searchValue.split(' ').join('+')}&limit=${limit}`
        const response = await fetch(itunesURL);
        const json = await response.json();

        this.setState({data: json.results, top: []});
    }

    setTop = (top) =>{ 
        this.setState({top});
    }

    render() {
        const { data, top } = this.state;
        return (
            <div>
                <SearchForm setTop={this.setTop} Search={this.Search}/>
                {top.length === 0 ?  (
                    <div> 
                        <Results data={data} />
                    </div>
                ) :
                <Top data={top} />}
            </div>
        )
    }
}
