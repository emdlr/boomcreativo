import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      tienda:"Boom"
    }
  }
  render(){
     return(
            <div className="App">
              <header className="header">
                <div className="title">BOOM CREATIVO</div>
                <Nav/>
              </header>
              <Switch>
                <Route exact path="/" render={(routerProps) => (<Main />)} />
              </Switch>
            </div>
      );
    }
}

