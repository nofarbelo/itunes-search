import React from 'react';
import '../styles/Media.css'

const Video = (props) => (
    <div className="container">
        <video controls width="320" height="240" autoPlay className="vertical-center">
        <source src={props.data.previewUrl} type="video/mp4" />
        <source src={props.data.previewUrl} type="video/oog" />
    </video>
</div>
);

export default Video;
