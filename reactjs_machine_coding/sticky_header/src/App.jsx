import { useEffect, useState } from "react";
import "./App.css";
import Carasouel from "./components/Carasouel";

const d = [
  { id: 1, text: "1", isVisible: false },
  { id: 2, text: "2", isVisible: false },
  { id: 3, text: "3", isVisible: false },
];

function App() {
  const [id, setId] = useState(1);
  const [data, setData] = useState(d);

  useEffect(() => {
    const id1 = setInterval(() => {
      setData((prevData) => {
        return prevData.map((item) => {
          if (item.id === id) {
            return { ...item, isVisible: true };
          } else {
            return { ...item, isVisible: false };
          }
        });
      });

      setId((prevId) => (prevId === data.length ? 1 : prevId + 1));
    }, 1000);

    return () => {
      clearInterval(id1);
    };
  }, [id, data.length]); // Add id and data.length as dependencies

  return (
    <>
      <Carasouel datas={data} id11={id} />
    </>
  );
}

export default App;
