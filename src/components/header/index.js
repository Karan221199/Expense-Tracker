import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className='header-container'>
            <div className='header'>
                <div className='header-logo'>
                    Expense Tracker
                </div>
                <div className='header-button'>
                    <a href='https://github.com' target="_blank" rel='noopener noreferrer' >
                    <i className="fa-brands fa-github"></i>Star
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;