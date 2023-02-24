import React from 'react';
import { Navbar, Header, Footer } from './containers';
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="color__bg">
        <Navbar />
      </div>
      <div className="Header">
        <Header />
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  )
}

export default App