import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import World from "./Components/World";
import Clan1 from "./Components/Clan1";
import Clan2 from "./Components/Clan2";
import Clan3 from "./Components/Clan3";
import Footer from "./Components/Footer";
import Player from "./Components/Player";

import logo from "./Images/logo.png";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="LoadingScreen">
          <h1 className="Phrase1">Between mist and dreams,</h1>
          <h1 className="Phrase2">lies the magical kingdom of...</h1>
          {/* <img className="Motto" src={logo} /> */}
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <Hero />
          <World />
          <Clan1 />
          <Clan2 />
          <Clan3 />
          <Footer />
          <Player />
        </div>
      )}
    </>
  );
}

export default App;
