
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './components/HomeComponents/Home';
import Navbarmenu from './components/Navbarmenu';
import Contact from './components/HomeComponents/Contact'

function App() {
  return (
    <div className="App">
      <Router >
        <Navbarmenu />
        <Home />

      </Router>
    </div>
  );
}

export default App;

