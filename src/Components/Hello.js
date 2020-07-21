import React from 'react';
import './assert/App.css';
import { Link } from 'react-router-dom'

function Hello() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello</h1>
                <p>
                    <Link to="./apple">Apple</Link>
                    <br />
                    <Link to="./banana">Banana</Link>
                    <br />
                    <Link to="./cherry">Cherry</Link>
                    <br />
                    <Link to="./durian">Durian</Link>
                </p>
            </header>
        </div>
    );
}

export default Hello;
