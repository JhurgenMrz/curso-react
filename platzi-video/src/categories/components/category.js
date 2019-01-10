import React from 'react'
import Playlist from '../../playlist/components/playlist'
import '../../playlist/components/playlist.css'

function Category (props){
return (
    <div>
        <p className="Playlist-description">{props.description}</p>
        <h2 className= "Playlist-title  ">{props.title}</h2>
        <Playlist playlist={props.playlist}/>
    </div>
)
}

export default Category