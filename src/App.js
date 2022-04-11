import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App(props) {
  return (
    <div className="mainContainer">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
