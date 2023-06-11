import "./App.css";
import AddressSurvey from "./AddressSurvey";
import subject from "./subject.png";

function App() {
  return (
    <div className="App">
      <header className="ApSop-header">
        <img src={subject} className="App-logo" alt="logo" />
        <p>Sign up for Wobegone here!</p>
        <AddressSurvey />
      </header>
    </div>
  );
}

export default App;
