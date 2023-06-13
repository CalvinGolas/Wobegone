import "./App.css";
import AddressSurvey from "./AddressSurvey";
import BackgroundVideo from "./BackgroundVideo";
import subject from "./subject.png";

function App() {
  return (
    <div className="App">
      <header className="ApSop-header">
        <BackgroundVideo />
        <img src={subject} className="App-logo" alt="logo" />
        <p>Sign up for Wobegone here!</p>
        {/*  TODO: Insert description of service */}
        <AddressSurvey />
      </header>
    </div>
  );
}

export default App;
