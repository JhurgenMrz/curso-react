import React from 'react'
import Figure from '../../icons/components/figure'
import './full-screen.css'

const FullScreen = (props) => (
    <div 
    className='FullScreen'
    onClick={props.handleFullScreenClick}
    >
        <Figure.FullScreen
        color='white'
        size={25}
        />
    </div>
)

export default FullScreen