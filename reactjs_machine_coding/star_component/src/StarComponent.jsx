import { useState } from "react"
import './index.css';

const StarComponent = ({count = 5}) => {
  const [selectedIdx, setSelectedIdx] = useState();
  const [hoveredIdx, setHoveredIdx] = useState();

  return (
     new Array(count).fill(0).map((_,idx)=>{
        return (
            <span  className={(hoveredIdx == 0 && idx < selectedIdx) || (idx < hoveredIdx) ? "gold" : ""} onClick={()=> setSelectedIdx(idx + 1)} onMouseEnter={()=> setHoveredIdx(idx + 1)} onMouseLeave={()=> setHoveredIdx(0)} key={idx}>&#9733;</span>
        )
     })
  )
}

export default StarComponent