import React from 'react';
import '../styles/Media.css'

const Details = ({data}) => (
    <div className="col-md-6 col-sm-12 details">
        <h2 className="py-3">{data.trackName}</h2>
        <h5 className="py-2">Artist: {data.artistName}</h5>
        <h5 className="py-2">Price: {data.trackPrice} {data.currency}</h5>
        <h5 className="py-2">Country: {data.country}</h5>
    </div>
);

export default Details;