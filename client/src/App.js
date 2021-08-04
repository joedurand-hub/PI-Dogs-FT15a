import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home/1-Home/Home.jsx';
import LandingPage from './Components/Landing/Landing.jsx';
import Create from './Components/Home/3-Form/Form.jsx';
import DetailCard from './Components/Detail/DetailCard.jsx';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      <Route path="/create" component={Create}/>
      <Route path='/dog/' component={DetailCard}></Route>
      </Switch>
    </div>
  );
}