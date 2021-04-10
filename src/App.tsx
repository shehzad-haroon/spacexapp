import React from 'react';
import logo from './logo.svg';
import './App.css';
// import AllLaunches from './components/AllLaunches/index'
// import Launch from './components/Launch/indexLaunch'
import RenderAllLaunches from './components/AllLaunches/index';
import Launch from './components/Launch'
import FinalLaunch from './components/Launch/FinalLaunch'
import { Route, Switch ,Link, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
// import NavB from './components/Home/NavB';
import { Nav,Navbar, NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import Starship from './components/Starship/Starship';
import Mission from './components/MIssion/Mission';
// import Mission from './components/Mission/Mission';
function App() {
  return (
    <React.Fragment>
      {/* <NavB/> */}
    <Router>
      <Switch>
      <div className="App">

      <div className="container-fluid">
        
        <div className="row " >
        
          <div className="col-10 mx-auto">

            
          <Navbar bg="light" variant="light" expand="lg" fixed="top" className="Navbar">
         
<Navbar.Brand href="#home"><b id="black"><h4>Space X</h4></b></Navbar.Brand>

<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto" > 
 
  <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/Launches">Launches</NavLink></Nav.Link>
         <Nav.Link><NavLink to="/Mission">Space X Mission</NavLink></Nav.Link>
         <Nav.Link><NavLink to="/Starship">Starship</NavLink></Nav.Link>
  {/* <Nav.Link> <NavLink to="/About">About</NavLink></Nav.Link> */}
  </Nav>
 
    </Navbar.Collapse>
    
</Navbar>
      </div>
      
      </div>
  
</div>

    <Route exact path="/" component={Home}/>
    <Route exact path="/Launches" component={RenderAllLaunches}/>
    <Route exact path="/Starship" component={Starship}/>
    <Route exact path="/Mission" component={Mission}/>
     {/* <Route path="/Launches/:flight_number" component={Launch}/> */}
     <Route path="/Launches/:flight_number" component={FinalLaunch}/>
     <div className="footer">
      {/* <br/> */}
      ❤ Made By Shehzad ❤ 
      {/* <br/> */}
    </div>
    </div>
      </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
