import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/Menu';
import data from './data/store';

ReactDOM.render(<Menu recipes={data} title='Delicious Recipes' />, document.getElementById('root'));