import React,{Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video';
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import formattedTime from '../../helpers/FormattedTime'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'
import FullScreen from '../components/full-screen'

export default class VideoPlayer extends Component {
    state = {
        pause:true,
        duration: 0,
        currentTime:0,
        loading:false,
        volume: 1,
        lastValue: null, 
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
    handleSeeking = event =>{
        this.setState({
            loading:true
        })
    }

    handleSeeked = event =>{
        this.setState({
            loading:false
        })
    }
    handleVolumeChange = event =>{
        this.video.volume = event.target.value;
        this.setState({
            volume:this.video.volume
        })
    }

    handleVolumeToggle = () => {
        const lastValue = this.video.volume;
        this.setState({lastValue})
        if(this.video.volume !== 0){
             this.video.volume = 0;
             this.setState({
                 volume: this.video.volume
             })
        }else {
            this.video.volume = this.state.lastValue
            this.setState({
                volume: this.video.volume
            })
        }
    }

    handleFullScreenClick = event =>{
        if (!document.webkitIsFullScreen){
            this.player.webkitRequestFullscreen( )
        }else{
            document.webkitExitFullscreen()
        }
    }

    setRef = element =>{
        this.player = element
    }


    render(){
        return (
            <VideoPlayerLayout
            setRef={this.setRef}
            >
                <Title
                title={this.props.title}
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
                <Volume
                handleVolumeChange={this.handleVolumeChange}
                handleVolumeToggle={this.handleVolumeToggle}
                volume={this.state.volume}
                />
            <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
            />
            </Controls>
                <Spinner
                active={this.state.loading}
                />
                <Video
                pause={this.state.pause}
                autoplay = {this.props.autoplay}
                handleLoadedMetaData={this.handleLoadedMetaData}
                handleTimeUpdate={this.handleTimeUpdate}
                handleSeeking={this.handleSeeking}
                handleSeeked={this.handleSeeked}
                src={this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}
