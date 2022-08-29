import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <section>
      <div className="Phonetic">
        <span> {props.phonetic.text}</span>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
    </section>
  );
}
