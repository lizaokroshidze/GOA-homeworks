import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";

const Card = () => {
  const [ageData, setAgeData] = useState({
    ageDate: "--",
    ageMonth: "--",
    ageYear: "--",
  });

  const receiveData = (variable) => {
    setAgeData(variable);
  };

  return (
    <div className="card px-8 py-4 rounded-xl rounded-br-[12rem]">
      <Form sendData={receiveData} />
      <Result ageData={ageData} />
    </div>
  );
};

export default Card;
