import DragAndDrop from "./DragAndDrop";
import "./styles.css";

const data = {
  InProgress: ["This is first", "This is Second", "This is Third"],
  "Not Started": ["ok", "First", "Second"],
  Completed: ["I am done", "This is the 2nd tune", "3rd time"],
};
export default function App() {
  return (
    <div className="App">
      <DragAndDrop data={data} />
    </div>
  );
}
