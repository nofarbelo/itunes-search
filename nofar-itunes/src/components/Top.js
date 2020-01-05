import React from 'react'

const Top = ({data}) => {
    return (
        data.map((search, index) => <div key={index} > {search.name} </div>)
    )
}

export default Top;