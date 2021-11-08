import "./App.css";
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";

function App() {
  // useEffect(() => {
  // }, []);
  document.querySelectorAll('a[href^="#').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(this.getAttribute("href"), "href");
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  console.log(document.querySelectorAll('a[href^="#'));
  return (
    <div className="App">
      <Hero />
      <Body />
    </div>
  );
}

export default App;
