import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>

        {props.meaning.definitions.map(function (definition, index) {
          if (index < 3) {
            return (
              <div key={index}>
                <p>
                  {definition.definition}
                  <br />
                  <br />

                  <em>
                    {definition.example && (
                      <Example example={definition.example} />
                    )}
                  </em>
                  <br />
                  <Synonyms synonyms={definition.synonyms} />
                </p>
              </div>
            );
          }

          return null;
        })}
      </section>
    </div>
  );
}
