import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Submit from './components/Submit';
import Chanpass from './components/Chanpass';
import Sidebar from './components/sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (  
    <>
    <Router>
      <Switch>
        <Route path="/Dashboard" exact component={Dashboard}/>
        <Route path="/chanpass" exact component={Chanpass}/>
        <Route path="/Login" exact component={Login}/>
        <Route path="/Nav" exact component={Nav}/>
    </Switch>
    </Router>
    
    </>
  );
}

export default App;
