import React from 'react';
import error from '../../../images/error/error-404-2.jpg'
import './regular-error.css'


function RegularError(props){
    return(
        <div className='Regular-error'>
            <img src={error} />
        </div>
    )
}

export default RegularError