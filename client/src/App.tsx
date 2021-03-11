import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GetInTouch from './components/GetInTouch/GetInTouch';
import UsedTech from './components/UsedTech/UsedTech';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/tech" component={UsedTech} />
          <Route exact path="/about" component={About} />
          <Route path="/contact" component={GetInTouch} />
          <Route path="/projects" component={Projects} />

        </Switch>
        {/* <UsedTech /> */}
        <Footer />

      </div>
    </BrowserRouter>

  );
}

export default App;
