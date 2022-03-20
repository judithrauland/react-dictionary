import React from "react";
import Audio from "./Audio";
import "./Phonetic.css";

export default function Phonetics(props) {
  return (
    <div className="AllPhonetics">
      <span className="playSound">
        <Audio audio={props.phonetic.audio} />
      </span>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
