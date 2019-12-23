import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header className="header">
            <h1>Company Table</h1>
            <div className="input-container">
                <i className="fas fa-search"></i>
                <input 
                    type="text"
                    placeholder="Filter..."
                    onChange={props.inputOnChange}
                />
            </div>
        </header>
    )
}

export default Header