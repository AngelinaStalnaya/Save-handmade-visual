import "./App.css";
import CommonBtn from "./components/buttons/CommonBtn/CommonBtn";

function App() {
  return (
    <div className="App">
      <h1>This is the app for saving DIY patterns and handcraft ideas</h1>
      <CommonBtn children="Tap" variant="outlined" />
    </div>
  );
}

export default App;
