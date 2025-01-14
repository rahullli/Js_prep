import { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./index.css";

export default function App() {
  const [show, setShow] = useState(false);
  const toggleProgressBar = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleProgressBar}>Show Progress Bar</button>
      {show == true ? <ProgressBar /> : ""}
    </>
  );
}
