import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="row justify-content-evenly">
        <div className="Synonyms col-12">
          {props.synonyms.map(function (synonym, index) {
            return <div key={index}>{synonym}</div>;
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
