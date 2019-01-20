import React,{Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video';
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'

export default class VideoPlayer extends Component {
    state = {
        pause:true,
        duration: 0
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    
    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetaData = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration

        })
    }

    render(){
        return (
            <VideoPlayerLayout>
                <Title
                title="Esto es un Video Chido"
                />
            <Controls>
                <PlayPause 
                handleClick={this.togglePlay}
                pause={this.state.pause}
                />
                <Timer 
                duration={this.state.duration}
                />
            </Controls>

                <Video
                pause={this.state.pause}
                autoplay = {this.props.autoplay}
                handleLoadedMetaData={this.handleLoadedMetaData}
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}
