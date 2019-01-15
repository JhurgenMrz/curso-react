import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import'./media.css'

class Media extends PureComponent{
    state={
        author:'Jhurgen Maraza'
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author: props.author
    //     }
        
    // }
    // handleClick = (event) =>{
    //     console.log(this.props.author)
    //     this.setState({
    //         author : 'Leonidas Esteban'
    //     })
    // }

    render(){
        return (
            <div className="Media" onClick={this.props.handleClick}>
                <div className='Media-cover'>
                    <img src={this.props.cover} 
                    alt=""
                    width={260}
                    height={160}
                    className="Media-image"
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title:PropTypes.string.isRequired,
    author:PropTypes.string,

}

export default Media;