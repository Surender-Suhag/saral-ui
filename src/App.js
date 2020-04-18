import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Keywords } from "./components/keywords/Keywords";
import { Home } from "./components/Home";
import { ComponentList } from "./components/test-components/ComponentList";
import { Testlab } from "./components/test-lab/TestLab";
import NoMatch from "./components/NoMatch";
import { Layout } from "./components/common/Layout";
import {} from './components/common/header/Jombotron';
import { NavigationBar } from './components/common/header/NavigationBar'
import {Jumbotron} from "./components/common/header/Jombotron";
const App = () => (
  <React.Fragment>

    <Router>
      <NavigationBar />
      <Jumbotron/>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/keywords" component={Keywords} />
          <Route exact path="/components" component={ComponentList} />
          <Route exact path="/testlab" component={Testlab} />
          <Route component={NoMatch} />

        </Switch>
      </Layout>
    </Router>

  </React.Fragment>
);

export default App;
