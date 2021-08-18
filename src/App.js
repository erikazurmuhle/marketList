import "./App.css";
import MyList from "./components/MyList/MyList";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/mylist">
            <MyList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
