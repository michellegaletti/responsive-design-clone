import "./App.css";
import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <div className="navScroll">
        <header className="nav">
          <h1 className="title">Start Bootstrap</h1>
          <Nav />
        </header>
      </div>
      <div className="headerImg">
        <h2>Welcome to Our Studio!</h2>
        <h1>IT'S NICE TO MEET YOU</h1>
        <div className="fakeBtn">TELL ME MORE</div>
      </div>
      <Services />
    </div>
  );
}

export default App;
