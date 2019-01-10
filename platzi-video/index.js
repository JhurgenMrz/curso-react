import React from 'react';
import {render} from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';


//ReactDOM.render(que voy a renderizar,donde lo haré){

const app = document.getElementById('app')
// const holaMundo = <h1>Hola Mundo!</h1>

render(<Playlist data={data}/>,app)
// render(<Playlist data={data}/>,app2)
// render(<Playlist data={data}/>,app3)
