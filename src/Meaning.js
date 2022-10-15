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
                <div className="noun">
                  {definition.definition}
                  <br />

                  <em className="example">
                    {definition.example && (
                      <Example example={definition.example} />
                    )}
                  </em>
                  <br />
                  <p className="synonyms">
                    <Synonyms synonyms={definition.synonyms} />
                  </p>
                </div>
              </div>
            );
          }

          return null;
        })}
      </section>
    </div>
  );
}
