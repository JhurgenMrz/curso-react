import React from 'react';
import Figure from '../../icons/components/figure'
import './play-pause.css'

const PlayPause = (props) => (
    <div className="PlayPause">
        {
            props.pause ?
            <button  
                onClick={props.handleClick}
            >
                <Figure.Play size={25} color= "white"/>
            </button>
            :
            <button  
                onClick={props.handleClick}
            >
                <Figure.Pause size={25} color= "white"/>
            </button>

        }


    </div>
)

export default PlayPause;