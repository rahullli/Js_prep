import { useState } from "react";
import "../App.css";

const InteractiveShape = () => {

  const [count, setCount] = useState(0);
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false))
  );

  const handleClick = (rowIdx, colIdx) => {
    if (!grid[rowIdx][colIdx]) {
      const gridDeepCopy = grid.map((row) => [...row]);
      gridDeepCopy[rowIdx][colIdx] = true;
      setGrid(gridDeepCopy);
      setCount((count) => count + 1);

      if(count == grid.length * grid[0].length){
        startReversing();
      }
    }
  };

  const startReversing = () =>{
    
  }
  return (
    <div className="container">
      {grid.map((row, rowIdx) => {
        return row.map((col, colIdx) => {
          return (
            <div
              className={`cell ${col ? "active" : ""}`}
              key={`${rowIdx}-${colIdx}`}
              onClick={() => handleClick(rowIdx, colIdx)}
            ></div>
          );
        });
      })}
    </div>
  );
};

export default InteractiveShape;
