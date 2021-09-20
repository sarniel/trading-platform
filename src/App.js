import "./App.scss";
import React, { Component } from "react";
import Portfolio from "./pages/portfolio/portfolio";
import ItemDetails from "./pages/portfolio/item-details";
import Watchlist from "./pages/watchlist/watchlist";
import PageNotFound from "./pages/404";
import Menu from "./components/menu/menu";
import Header from "./components/header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <>
                <Header />
                <Menu />
                <div className="main-container">
                    <Switch>
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/watchlist" component={Watchlist} />
                        <Route
                            exact
                            path="/portfolio/:id"
                            component={ItemDetails}
                        />
                        <Route exact path="*" component={PageNotFound} />
                    </Switch>
                </div>
            </>
        </Router>
    );
}

export default App;
