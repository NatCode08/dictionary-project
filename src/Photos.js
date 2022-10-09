import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="container">
          <div className="row justifiy-content-evenly">
            {props.photos.map(function (photo, index) {
              console.log(photo);
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.original}
                      className="img-fluid"
                      alt="result"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
