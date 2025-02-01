import { useEffect, useState, useRef } from "react";

const DragAndDrop = ({ data }) => {
  const [dataa, setData] = useState(data);
  const draggingItem = useRef();
  const draggingContainer = useRef();

  const handleDragStart = (e, item, container) => {
    draggingItem.current = item;
    draggingContainer.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDrop = (e, destination_container) => {
    // in this desired container , I have to put the item stored in the ref

    const source_item = draggingItem.current;
    const source_container = draggingContainer.current;

    setData((prev) => {
      const newData = { ...prev };
      newData[source_container] = newData[source_container].filter(
        (i) => i !== source_item
      );
      newData[destination_container] = [
        ...newData[destination_container],
        source_item,
      ];
      return newData;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Object.keys(dataa).map((column_header, index) => (
          <div
            key={index}
            onDrop={(e) => handleDrop(e, column_header)}
            onDragOver={handleDragOver}
            style={{
              background: "#f0f0f0",
              padding: "1rem",
              width: "250px",
              minHeight: "300",
            }}
          >
            <h2>{column_header}</h2>
            {dataa[column_header].length > 0 ? (
              dataa[column_header]?.map((item, index) => (
                <div
                  draggable
                  onDragStart={(e) => handleDragStart(e, item, column_header)}
                  onDragEnd={(e) => handleDragEnd(e, column_header)}
                  key={index}
                  style={{
                    padding: 16,
                    margin: "0 0 8px 0",
                    backgroundColor: "white",
                    cursor: "move",
                    userSelect: "none",
                  }}
                >
                  {item}
                </div>
              ))
            ) : (
              <div>No item </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default DragAndDrop;
