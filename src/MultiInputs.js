import React, { useState } from "react";

const MultiInputs = () => {
  const [formValues, setFormValues] = useState({});

  function handleInputChange(event) {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [event.target.name]: event.target.value,
    }));
  }

  function addTodo(inputsValueObject) {
    const newTodo = inputsValueObject;
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p>first name</p>
      <input name="firstName" onChange={handleInputChange} />
      <p>last name</p>

      <input name="lastName" onChange={handleInputChange} />
      <p>age</p>

      <input name="age" onChange={handleInputChange} />
      <p>job</p>

      <input name="job" onChange={handleInputChange} />
      <br />
      <input type="submit" />
    </form>
  );
};

export default MultiInputs;
