import Home from "./components/Home";
import Players from "./components/Players";
import Toss from "./components/Toss";
import Form from "./components/Form";
import Loginform from "./components/Loginform";
import { BrowserRouter as Router,Routes, Route  } from "react-router-dom";

function App() {

  
  return (
    <div className="App">
      <h1>REACT PRACTICE </h1>
      {/* <nav>
        <ul>
          <li><Link to="/" >Home</Link></li> 
          <li><Link to="/form" >form</Link></li>
          <li><Link to="/login" >Login form</Link></li>
          <li><Link to="/players" >Players</Link></li>
          <li><Link to="/toss" >Toss time</Link></li>
        </ul>
      </nav> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home name="React" />}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/login" element={<Loginform/>}/>
            <Route path="/players" element={<Players/>}/>
            <Route path="/toss" element={<Toss/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;