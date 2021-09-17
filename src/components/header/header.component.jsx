import React from 'react';
import './header.styles.css'

const Header = () => {
    return (
            <header className="container-fluid p-4 bg-light">
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <h1>
                            <a className="site-header__logo-link" href="/">Spacestagram</a>
                        </h1>
                    </div>
                </nav>
            </header>
    )
}

export default Header;