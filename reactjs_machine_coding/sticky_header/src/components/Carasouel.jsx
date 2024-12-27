const Carasouel = ({ datas, id11 }) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            width: "250px",
            height: "250px",
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column", // Stack the items vertically
          }}
        >
          <span>{datas[id11 - 1].id}</span> {/* Adjust for 0-based index */}
          <span>{datas[id11 - 1].text}</span> {/* Use 'text' instead of 'title' */}
        </div>
      </>
    );
  };
  
  export default Carasouel;
  