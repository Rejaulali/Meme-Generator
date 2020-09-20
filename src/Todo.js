import React from "react";

function Todo(props) {
  const completeSyle = {
    fontStyle:"italic",
    color:"grey",
    textDecoration:"line-through",

  }
  return (
    <div>
      <input
        type="checkbox"
        checked={props.item.complete}
        onChange={() => props.HandleClick(props.item.id)}
      />
      <span style={props.item.complete?completeSyle:null}>{props.item.text}</span>
      <br />
    </div>
  );
}

export default Todo;
