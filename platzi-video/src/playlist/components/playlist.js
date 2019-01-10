import React, {Component} from 'react';
import Media from './media.js'
import './playlist.css';
import Figure from '../../icons/components/figure'

function Playlist(props){
        console.log(props.data)
    
        // const plist = props.data.categories[0].Playlist;

        const categories = props.data.categories;
        const playlist = props.data.categories;
        console.log(categories)

        return(
            <div className="Category">
                    <div>
                    <Figure.Play size={50} color="blue"/>
                    <Figure.Pause size={50} color="red"/>
                    <Figure.Volumen size={50} color="green" />
                    <Figure.FullScreen size={50} color="orange" />
                    </div>
                {
                    playlist.map((item)=>{
                        console.log(item)
                    return (
                        <div className="Playlist" key={item.id} >
                                <h3 className="Playlist-description">
                                    <span className="Content">{item.description}</span>
                                </h3>
                                <h2 className="Playlist-title">
                                    <span className="content">{item.title}</span>
                                </h2>
                                <div className="Playlist" >
                                    
                                {
                                    item.playlist.map(list=>{
                                        return <Media {...list} key={list.id}/>
                                    })

                                }
                                </div>

                            
                        </div>
                    )
                    })
                }
                
            </div>
        )
}

export default Playlist