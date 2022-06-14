import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Examples">
        {props.example.map(function (example, index) {
          return <span key={index}>{example}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
