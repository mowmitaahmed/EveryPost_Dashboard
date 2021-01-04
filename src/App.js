import './styels/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error1 from './Components/Pages/Error/Error1/Error1';
import Login from './Components/Shared/Login/Login';
import Analytics from './Components/Analytics/Analytics';
import UserEdit from './Components/User/UserEdit';
import UserView from './Components/User/UserView';
import CardsBasic from './Components/Cards/CardsBasic';
import CardActions from './Components/Cards/CardActions';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
             <Analytics />
          </Route>
          <Route path="/useredit">
             <UserEdit />
          </Route>
          <Route path="/userview">
            <UserView />
          </Route>
          <Route path="/cardbasic">
            <CardsBasic />
          </Route>
          <Route path="/cardactions">
            <CardActions />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error1 />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
