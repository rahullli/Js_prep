import { useEffect, useState } from "react";
import "./index.css";

const ProgressBar = () => {
    const [bar, setBar] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        console.log("I am running ...");
  
        setBar((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return prev;
          }
          return prev + 5;
        });
        //   setBar((prev) => prev + 5);
  
        //   if (bar >= 100) {
        //     clearInterval(timer);
        //     return bar;
        //   }
      }, 100);
  
      // cleaning it up
      return () => {
        clearInterval(timer);
      };
    }, []);
    return (
      <div
        style={{
          visibility: bar >= 100 ? "hidden" : "visible",
        }}
        className="container"
      >
        <div
          style={{
            transform: `translateX(${bar - 100}%)`,
          }}
          className="progress"
        ></div>
      </div>
    );
}

export default ProgressBar