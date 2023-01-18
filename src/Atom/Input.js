import React, { useState } from "react";
import style from "./styled.module.css";
function Input(props) {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <input
        required
        className={props.className}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default Input;
