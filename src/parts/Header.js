import React from 'react'

import Button from 'smartComponent/Button'
import IconText from './IconText'


export default function Header(props) {
    // arrow function that will set menubar become active if path location equal with href path
    const getNavLinkClass = path =>{
        return props.location.pathname === path ? " active" : "";
    }

    return (
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <IconText />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                                <Button className="nav-link" type="link" href="/browse-by">
                                    Browse By
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/stories")}`}>
                                <Button className="nav-link" type="link" href="/stories">
                                    Stories
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/agents")}`}>
                                <Button className="nav-link" type="link" href="/agents">
                                    Agents
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/login")}`}>
                                <Button className="nav-link" type="link" href="/login">
                                    Login
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/register")}`}>
                                <Button className="nav-link" type="link" href="/register">
                                    Register
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        </header>
    )
}
