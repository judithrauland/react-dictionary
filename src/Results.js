import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";
import dictImg from "./undraw_chat_re_re1u.svg";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <section>
              <h2>{props.results.word}</h2>
              {props.results.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetic phonetic={phonetic} />
                  </div>
                );
              })}
            </section>
          </div>
          <div className="col-4">
            <img
              className="img-fluid undraw-img d-none d-sm-block"
              src={dictImg}
              alt="words"
              width={200}
            />
          </div>
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
