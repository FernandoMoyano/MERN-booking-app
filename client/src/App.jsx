import React from "react";
import "./components/Header/Header.css"

function App() {
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <img src="../public/logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact us</a>
          <a href="">Get started</a>
          <button>
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
