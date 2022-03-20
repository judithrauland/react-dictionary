import React from "react";
import "./ImagesResult.css";

export default function ImagesResult(props) {
  if (props.image) {
    return (
      <section className="ImagesGroup">
        <div className="row">
          {props.image.map(function (eachImage, index) {
            return (
              <div className="col-sm" key={index}>
                <a
                  href={eachImage.src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid mx-auto"
                    src={eachImage.src.tiny}
                    alt={eachImage.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
