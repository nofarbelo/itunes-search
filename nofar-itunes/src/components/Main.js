import React, { Component } from 'react'
import Results from './Results';
import SearchForm from './Search';
import Top from './Top'

export default class Main extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: null,
            top: []
        }
    }

    search = async (searchValue) => {

        const limit = 25;
        const itunesURL = `https://itunes.apple.com/search?term=${searchValue.split(' ').join('+')}&limit=${limit}`
        const response = await fetch(itunesURL);
        const json = await response.json();

        this.setState({data: json.results, top: []});
    }

    setTop = (top) => { 
        console.log(top)
        this.setState({top});
    }

    render() {
        const { data, top } = this.state;
        return (
            <div>
                <SearchForm setTop={this.setTop} search={this.search}/>
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
