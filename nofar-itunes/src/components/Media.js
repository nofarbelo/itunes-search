import React from 'react';
import Video from './Video';
import Audio from './Audio';
import Details from './Details';
import '../styles/Media.css'

class Media extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            id: props.location.aboutProps.id,
            data: {},
            isVideo: false};
        
        this.kinds = {video: ["feature-movie", "music-video", "tv- episode"], 
                      audio: ["song", "coached-audio", "podcast-episode"]}
    }


    async componentDidMount() {
        const idUrl = `https://itunes.apple.com/lookup?id=${this.state.id}`
        const response = await fetch(idUrl);
        const json = await response.json();

        let isKindVideo = this.kinds.video.includes(json.results[0].kind) ? true : false;
        
        this.setState({data: json.results[0], isVideo: isKindVideo});    
    }
    
    render() {
        const {data, isVideo} = this.state;
        return (
            <div className="container-div">
                <Details data={data}/>
                {isVideo ? <Video data={data}/> : <Audio data={data}/>}
            </div>
        )
    }
}

export default Media;