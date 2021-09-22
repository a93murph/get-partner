import "./styles.css";
import React from "react";
import axios from "axios";

export default function App() {
  const [input, setInput] = React.useState("");
  const [name, setName] = React.useState("");
  const [partner, setPartner] = React.useState("");
  const result = `${name} is dating ${partner}.`;

  const getPartner = () => {
    setName(input);
    axios
      .get(`https://test-express-app2.herokuapp.com/partners/${input}`)
      .then((res) => {
        setPartner(res.data);
      });
    setInput("");
  };

  return (
    <div className="App">
      <h1>Get Partner</h1>
      <input
        value={input}
        placeholder="Name"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={getPartner}>Find</button>
      <br />
      <br />
      <div>{partner.length > 0 ? result : null}</div>
    </div>
  );
}
