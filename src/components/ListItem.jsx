import React, { useState } from "react";

export default function ListItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
 
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
        <span onClick={() => {
        props.onChecked(props.id);
      }}>X</span>
      </li>
    </div>
  );
}
