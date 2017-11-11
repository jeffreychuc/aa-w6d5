import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

const Panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

class Root extends React.Component  {
  render ()  {
    return (
      <div>
        <Clock />
        {/* <Tabs panes={Panes}/>  */}
        <div> React is working! </div>
      </div>
    );
  }
}


document.addEventListener('DOMContentLoaded', ()=>  {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
