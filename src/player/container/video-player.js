import React,{Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video';
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import formattedTime from '../../helpers/FormattedTime'
import ProgressBar from '../components/progress-bar'

export default class VideoPlayer extends Component {
    state = {
        pause:true,
        duration: 0,
        currentTime:0,
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
    handleTimeUpdate= event =>{
        // console.log(this.video.currentTime)
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange=event=>{
        //  event.target.value
        this.video.currentTime = event.target.value
    
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
                duration={formattedTime(this.state.duration)}
                currentTime={formattedTime(this.state.currentTime)}
                />
                <ProgressBar
                duration={this.state.duration}
                value={this.state.currentTime}
                handleProgressChange={this.handleProgressChange}

                />
            </Controls>

                <Video
                pause={this.state.pause}
                autoplay = {this.props.autoplay}
                handleLoadedMetaData={this.handleLoadedMetaData}
                handleTimeUpdate={this.handleTimeUpdate}
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}
