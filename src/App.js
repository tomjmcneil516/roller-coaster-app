import RollerCoasterDetail from './RollerCoasterDetail';
import AmusementParkDetail from './AmusementParkDetail';
import RollerCoasterList from './RollerCoasterList';
import AmusementParkList from './AmusementParkList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/amusement-parks" exact component={AmusementParkList}/>
          <Route path="/roller-coasters" exact component={RollerCoasterList}/>
          <Route path="/amusement-parks/:amusementParkName" exact component={AmusementParkDetail}/>
          <Route path="/:roller-coasters/:rollerCoasterName/:amusementParkName" exact component={RollerCoasterDetail}/>s
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
