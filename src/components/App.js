import React from 'react';
import Card from './Card'
import Navbar from './Navbar'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
