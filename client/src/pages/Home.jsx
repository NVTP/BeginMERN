import React, { useEffect, useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  const getData = () => {
    fetch("http://localhost:8080")
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

export default Home;
