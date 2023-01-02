import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Master from './Master';



function App() {
    return (
        <div className="app">

            <BrowserRouter>
                <Master/>
            </BrowserRouter>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
