import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

//Components
import TopBar from './components/topbar';
import Footer from './components/footer';
import Dashboard from './pages/dashboard';
//Components


export default function App2() {
  return (

    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}



/* MARROMENO
function App() {
  return (
  <div className="raiz">

      <TopBar/>

      <BrowserRouter>
        <Switch>
          <Route exact path="/app2" component={Dashboard} />
          <Route exact path="/app2/footer" component={Footer} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;*/
