import React from 'react';
import Card from './Card'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Card />
    </div>
  );
}

export default App;
