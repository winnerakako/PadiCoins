import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Terms from "./components/Body/Terms";
import Policy from "./components/Body/Policy";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div className="App">
              <Hero />
              <Body />
            </div>
          )}
        />
        <Route path="/terms-and-conditions" exact render={() => <Terms />} />
        <Route path="/privacy-policy" exact render={() => <Policy />} />
      </Switch>
    </Router>
  );
}

export default App;
