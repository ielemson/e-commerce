import React from 'react';
import Homepage from './pages/homepage/homepage';
import Slider from './pages/slider/slider'
import Navbar from './components/menu-item/navbar'
import Footer from './pages/footer/footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
