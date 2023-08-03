import React from "react";
import "./hi.css";
function Home() {
  return (
    <div className="container-fluid">
      <nav className="py-auto">
        <div className="logo">
          <img src="logo.jpeg"alt="logo"></img>
        </div>
        <div className="nav-items">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
       </nav>
     
        <div className="row mt-5 ">
          <div className="col-6 col-xs-6 col-md-6 pt-5">
            <h1 >
            Mental Health
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor 
            </p>
            <button>GET STARTED</button>
          </div>
          <div className="col-6 col-xs-6 col-md-6 p-5">
            <img src="img.jpeg" alt="illustration" className="hero-image"></img>
          </div>

        </div>    
    </div>
  );
}

export default Home;

