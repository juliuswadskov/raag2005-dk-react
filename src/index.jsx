import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '@comp/navbar.jsx'

ReactDOM.render((
    <div>
        <Navbar/>
    </div>,
    document.getElementById('root')
));