import "./App.css";
import CommonBtn from "./components/buttons/CommonBtn/CommonBtn";
import AuthForm from "./components/forms/AuthForm/AuthForm";

function App() {
  return (
    <div className="App">
      <h1>This is the app for saving DIY patterns and handcraft ideas</h1>
      <CommonBtn children="Tap" variant="outlined" />
      <AuthForm />
    </div>
  );
}

export default App;
