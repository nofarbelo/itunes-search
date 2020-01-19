import React from 'react'
import '../styles/NoResults.css'

const Top = ({data}) => {
    return (
        <div className="topDiv">
        {data.map((search, index) => <div key={index} > {search.name} </div>)}
        </div>
    )
}

export default Top;