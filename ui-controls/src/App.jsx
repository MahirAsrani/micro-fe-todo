import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Btn from './components/button';
import ListItem from './components/list_item';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: ui-controls</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>

    <Btn />
    <ListItem />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
