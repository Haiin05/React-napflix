import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import TV from "./Pages/TV/TV";
import Search from "./Pages/Search/Search";
import Header from "./Components/Header/Header";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
};
export default Routes;
