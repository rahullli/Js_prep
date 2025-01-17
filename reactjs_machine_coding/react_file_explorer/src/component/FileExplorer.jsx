import { useState } from 'react';
import '../App.css'
const FileExplorer = ({ folderData }) => {
    const [show , setShow] = useState(false);
  console.log(folderData);

  const handleClick = () =>{
    setShow((val)=> !val)
  }
  return (
    <div className="container">
      <h5 style={{ cursor: "pointer"}} onClick={handleClick}>
        {folderData.type == "folder" ? "📂" : "📄"}
        <span>{folderData.name}</span>
      </h5>
      {
        show && folderData?.children?.map((childData, index)=>{
            return (
                <FileExplorer  key={index} folderData={childData} />
            )
        })
      }
    </div>
  );
};

export default FileExplorer;
