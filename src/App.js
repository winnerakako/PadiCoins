import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Terms from "./components/Body/Terms";
import Policy from "./components/Body/Policy";
import Calculator from "./components/Hero/Calculator";
import { useEffect, useState } from "react";
import { GET_BANKS, GET_COINS } from "./Data/requests";
import Loading from "./components/Layouts/Loading";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(GET_COINS)
      .then((res) => res.json())
      .then((data) => {
        fetch(GET_BANKS)
          .then((res) => res.json())
          .then((data2) => {
            setData({
              coins: data.data.coins,
              banks: data2.data.banks,
            });
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          })
          .catch((err) => {});
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            // loading ? (
            //   <Loading />
            // ) : (
              <div className="App">
                <Hero data={data} />
                <Body />
              </div>
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
