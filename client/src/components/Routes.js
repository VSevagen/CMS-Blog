import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Overview from "./Overview";
import About from "./About";
import Projects from "./Projects";
import Admin from "./Admin";
import BlogFormat from "./BlogFormat";
import Login from "./Login";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/login" component={Login} />
        <Route path="/GNOMEAsia2019" component={BlogFormat} />
        <Route path="/SchoolVisit" component={BlogFormat} />
        <Route path="/IncubateINDHackathon,Kochi" component={BlogFormat} />
        <Route
          path="/ERROR2002HY000Can'tconnecttoMySQLserver"
          component={BlogFormat}
        />
        <Route path="/MyFirstFossTalk!!!" component={BlogFormat} />
        <Route path="/Part1:HowtoinstallMediaWiki" component={BlogFormat} />
        <Route
          path="/Pythonasthefirstprogramminglangaugetolearn"
          component={BlogFormat}
        />
        <Route path="/MyFirstFossTalk!!!" component={BlogFormat} />
        <Route path="/" component={Overview} exact />
        <Route path="/admin" component={Admin} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default Routes;
