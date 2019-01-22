import React from 'react';
import Figure from '../../icons/components/figure'
import './volume.css'


function Volume(props){
    return (
        <div className='Volume'>
            
        <button className='Volume' onClick={props.handleVolumeToggle}>
            {
                props.volume ?
                <Figure.Volumen
                color='white'
                size={25}
                />
            :
                <Figure.Mute
                color='white'
                size={25}
                />
            }
        </button>
            <div className='Volume-range'>
                <input type="range"
                min={0}
                max={1}
                step={.05}
                onChange={props.handleVolumeChange}
                value={props.volume}
                />
            </div>
        </div>
    )
}

export default Volume