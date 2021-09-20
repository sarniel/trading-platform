import "./menu.scss";
import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <div className="menu-container">
            <div className="logo">
                <h1>Trading</h1>
            </div>
            <div className="account-details">
                <div className="avatar"></div>
                <div className="details">
                    <div className="account-name">Zarnel</div>
                    <div className="account-status">Bronze</div>
                </div>
            </div>
            <div className="group-menu-container">
                <div className="group-menu">
                    <div className="heading">Trade</div>
                    <ul>
                        <li>
                            <NavLink
                                activeClassName="active"
                                exact
                                to="/watchlist"
                            >
                                <i></i>Watchlist
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName="active"
                                exact
                                to="/portfolio"
                            >
                                <i></i>Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <a href="">
                                <i></i>News Feed
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="group-menu">
                    <div className="heading">Discover</div>
                    <ul>
                        <li>
                            <a href="">
                                <i></i>Trade Markets
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>Copy People
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i></i>Invest in CopyPortfolios
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu-footer">
                <button className="action-deposit btn-primary btn">
                    Deposit Funds
                </button>
            </div>
        </div>
    );
}

export default Menu;
