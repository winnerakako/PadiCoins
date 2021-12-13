import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Terms from "./components/Body/Terms";
import Policy from "./components/Body/Policy";
import Calculator from "./components/Hero/Calculator";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={
            () => (
              // loading ? (
              //   <Loading />
              // ) : (
              <div className="App">
                <Hero />
                <Body />
              </div>
            )
            // )
          }
        />
        <Route path="/terms-and-conditions" exact render={() => <Terms />} />
        <Route path="/privacy-policy" exact render={() => <Policy />} />
        <Route path="/calculator" exact render={() => <Calculator />} />
      </Switch>
    </Router>
  );
}

export default App;
