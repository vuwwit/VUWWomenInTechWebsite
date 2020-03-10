import React, { Component } from 'react';

import './App.scss';
import Main from './main';
import Header from './components/header';
import Footer from './components/footer';

import { BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
          <Header />
            <Main />
          <Footer />
           
          </div>
        </Router>
    );
  }
}

export default App;
