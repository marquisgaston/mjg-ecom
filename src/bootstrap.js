import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route, Switch } from "react-router-dom";
import reducers from "./reducers";

import Layout from "./components/layout";
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";

import history from "./history";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history ={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signin' exact component={SignIn}/>
            <Route path='/signup' exact component={SignUp}/>
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
