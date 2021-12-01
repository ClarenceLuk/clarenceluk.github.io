import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu.js'
import { BrowserRouter as Router } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <div>
        <Menu />
      </div>
    </Router>
  );
}

export default App;
