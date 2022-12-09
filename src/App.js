import "./App.css";
import { useEffect } from "react";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import UI from "./components/UI";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { CompatRouter } from "react-router-dom-v5-compat";

function App() {
  useEffect(() => {
    document.title = "Drew Codes";
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <UI />
      <Portfolio />
      <UI />
      <Contact />
      <Router>
        <CompatRouter>
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </CompatRouter>
      </Router>{" "}
    </div>
  );
}

export default App;
