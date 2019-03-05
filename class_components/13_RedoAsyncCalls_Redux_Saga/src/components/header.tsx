import * as React from 'react';
import { Link } from 'react-router-dom';

const alita = require('../images/alita.jpg');

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={alita} />
            <h1>阿丽塔—战斗天使</h1>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/members">
                            Members
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item" to="/member">
                            Member
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
