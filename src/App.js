import { useState } from "react";
import "./styles.css";

export default function App() {
  const [formdata, setFormData] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { contentType: "application/json" },
      body: JSON.stringify({
        title: formdata.name,
      }),
    });
  };
  return (
    <div className="App">
      <h1>Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
