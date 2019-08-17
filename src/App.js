import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/homepage/homepage';
import ContactUs from './pages/contact/contactus';
import Navbar from './pages/navbar/navbar'
import Slider from './pages/slider/slider';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (

    <Router>
      <div>
        <Navbar />
        <Slider />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={ContactUs} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
