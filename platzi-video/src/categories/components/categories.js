import React from 'react';
import Category from '../components/category'
import '../../playlist/components/playlist.css'

function Categories (props){
    return(
        <div>
            {
            props.categories.map((item)=>{
                return <Category key={item.id} {...item} />
            })
            }
        </div>
    )
}

export default Categories