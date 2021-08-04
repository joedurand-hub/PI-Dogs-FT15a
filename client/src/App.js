import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './3-components/2-Home/Home/Home'
import LandingPage from './3-components/1-Landing/Landing.jsx';
import Create from './Components/Home/3- Form/Form'
import DetailCard from './Components/Detail/DetailCard'


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