import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GetInTouch from './components/GetInTouch/GetInTouch';
import UsedTech from './components/UsedTech/UsedTech';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Header} />
          {/* <Route path="/tech" component={UsedTech} /> */}
          <Route path="/contact" component={GetInTouch} />
          <Route path="/projects" component={Projects} />

        </Switch>
        <UsedTech />
        <Footer />




      </div>
    </BrowserRouter>

  );
}

export default App;
