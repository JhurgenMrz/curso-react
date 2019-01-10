import React, {Component} from 'react';
import HomeLeyout from '../components/home-leyout'
import Categories from '../../categories/components/categories'

class Home extends Component {
    render(){
        return(
           <HomeLeyout>
               <Categories categories={this.props.data.categories}/>
           </HomeLeyout>

        )
    }
}

export default Home