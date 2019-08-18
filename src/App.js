import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './pages/homepage/homepage';
import ContactUs from './pages/contact/contactus';
import Navbar from './pages/navbar/navbar';
import Shop_Page from './pages/shop/shoppage';
// import Slider from './pages/slider/slider';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (

    <div>
      <Navbar />
      {/* <Slider /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/shop' component={Shop_Page} />
      </Switch>
    </div>
  );
}

export default App;
