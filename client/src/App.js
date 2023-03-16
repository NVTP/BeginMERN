import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const getData = () => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => {
        console.log(" data ", data);
        setName(data.name);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
};

export default App;
