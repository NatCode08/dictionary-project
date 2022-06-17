import React from "react";

export default function Example(props) {
  console.log(props.example);
  if (props.example) {
    return (
      <div className="Examples">
        <span>{props.example}</span>
      </div>
    );
  } else {
    return null;
  }
}
