import React, {Component} from 'react';
import'./media.css'

class Media extends Component{
    render(){

        
        return (
            <div className="Media">
                <div className='Media-cover'>
                    <img src="./images/covers/bitcoin.jpg" 
                    alt=""
                    width={260}
                    height={160}
                    className="Media-image"
                    />
                    <h3 className="Media-title">¿Por qué aprender React?</h3>
                    <p className="Media-author">Jhurgen Maraza</p>
                </div>

            </div>
        )
    }
}

export default Media;