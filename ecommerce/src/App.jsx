import React, { useEffect, useState } from "react";

const App = () => {
  const apidata = async () => {
    const res = await fetch("/api/getdata");
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    apidata();
  }, []);
  return (
    <>
      <h1>Lorem ipsum dolor sit amet.</h1>
    </>
  );
};

export default App;
