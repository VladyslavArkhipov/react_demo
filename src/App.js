import logo from "./logo.svg";
import "./App.css";

function App() {
  function submitForm(event) {
    event.preventDefault(); // предотвращаем стандартное поведение формы

    const form = event.target;
    const formData = new FormData(form);

    const email = formData.get("text");

    fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div className="App">
      <form action="#" method="post" onSubmit={submitForm}>
        <input type="text" name="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;
