import "./App.css";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import UI from "./components/UI";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <UI />
      <Portfolio />
      <UI />
      <Contact />
      <Router>
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>{" "}
    </div>
  );
}

export default App;
