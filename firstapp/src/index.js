import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <h2>This is React Page</h2>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))