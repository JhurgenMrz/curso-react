import React, {Component} from 'react';
import Media from './media.js'
import './playlist.css';
// import Figure from '../../icons/components/figure'

function Playlist(props){
        return(
            <div className="Playlist">
                {
                    props.playlist.map((item)=>{
                        return <Media OpenModal={props.handleOpenModal} {...item} key={item.id}/>
                        
                    
                })
            }
            </div>
        )
}   

export default Playlist