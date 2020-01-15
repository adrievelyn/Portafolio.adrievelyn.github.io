import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import CV from './Components/CV.js';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//const element = <h1>Hello, Adri</h1>;

const container = document.getElementById('app');

ReactDOM.render(<Home />, container);

