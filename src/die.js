import React from "react";

import "./die.css";

export default function(props) {
  return (
    <div className="Die">
      {props.num ? (
        <div
          className={`fa fa-dice-${props.num} ${props.isRolling && "wobble"}`}
        />
      ) : null}
    </div>
  );
}
