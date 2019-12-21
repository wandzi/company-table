import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Company Table</h1>
            <div className="input-container">
                <input type="text"/><i className="fas fa-search"></i>
            </div>
        </header>
    )
}

export default Header