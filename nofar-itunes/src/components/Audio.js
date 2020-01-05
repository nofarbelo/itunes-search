import React from 'react';
import '../styles/Media.css'
import ReactAudioPlayer from 'react-audio-player';

const Audio = (props) => (
    <div className="container">
      <ReactAudioPlayer className="vertical-center"
        src={props.data.previewUrl}
        autoPlay
        controls
      />
    </div>
);

export default Audio;
