import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const App = () => {
    return (
        <div>
            <Clock/>
            <Tabs tabInfo={[{title: "one", content: "I am the first"}, {title: "two", content: "I am the second"}, {title: "three", content: "I am the third"}]}/>
            <Weather/>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App/>, document.getElementById('main'));
});
