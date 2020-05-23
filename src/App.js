import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Keywords from "./components/keywords/Keywords";
import { Home } from "./components/Home";
import { ComponentList } from "./components/test-components/ComponentList";
import { Testlab } from "./components/test-lab/TestLab";
import NoMatch from "./components/NoMatch";
import { Layout } from "./components/common/Layout";
import { Header } from "./components/common/Header";


const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
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
};

export default App;
