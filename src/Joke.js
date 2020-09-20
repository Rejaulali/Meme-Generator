import React from "react";

function Joke(props) {
  return (
    <div className="joke" style={{ backgroundColor: !props.q && "grey" }}>
      <p>{props.q}</p>
      <p>{props.a}</p>
    </div>
  );
}

export default Joke;
