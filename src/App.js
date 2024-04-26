import "./App.css";
import CommonBtn from "./components/buttons/CommonBtn/CommonBtn";
import AuthForm from "./components/forms/AuthForm/AuthForm";

const authHandleFunc = (formData) => {
  console.log('auth form submit passed')
  console.log(formData)
}

function validateForm() {
  let x = document.forms["authForm"]["login"].value;
  alert(x);
  };

function App() {
  return (
    <div className="App">
      <h1>This is the app for saving DIY patterns and handcraft ideas</h1>
      <CommonBtn children="Tap" variant="outlined" />
      <AuthForm handleFunc={authHandleFunc} getFormData={validateForm} />
    </div>
  );
}

export default App;
