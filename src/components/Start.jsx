import { useRef } from "react";
import { useState } from "react";

export default function Start({ setUserame }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUserame(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
