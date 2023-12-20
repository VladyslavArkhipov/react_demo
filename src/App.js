import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import { ModalSuccess } from "./components/ModalSuccess/ModalSuccess";
import { InstagramWidget } from "./components/common/InstagramWidget";

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function resetForm() {
    setIsFormSubmitted(false);
  }

  return (
    <div className="App">
      {isFormSubmitted ? (
        <ModalSuccess resetForm={resetForm} />
      ) : (
        <Form setIsFormSubmitted={setIsFormSubmitted} />
      )}
      <InstagramWidget />
    </div>
  );
}

export default App;
