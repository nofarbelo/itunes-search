import React from 'react';
import '../styles/item.css';
import { Link } from 'react-router-dom';


const Item = (props) => (
  <Link
  to={{
    pathname: '/itunes',
    aboutProps: {
      id : props.trackId
    }
  }}
  >
  <div className="card-wrapper">
    <div className="card">
      <img
        alt="img"
        className="card-img-top"
        src={props.artworkUrl100.replace('100x100', '1200x1200')}
      />
      <div className="card-body">
        <span className="card-text">
            {props.artistName + ' - ' + props.trackName}
        </span>
        <p className='font-weight-bold'>{props.kind}</p>
      </div>
    </div>
  </div>
  </Link>
);

export default Item;