import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media'

//ReactDOM.render(que voy a renderizar,donde lo haré){

const app = document.getElementById('app')
// const holaMundo = <h1>Hola Mundo!</h1>

render(<Media/>,app)