import React from "react";
import { handleDownload } from "../../utils/CVDownload";
import "./CVButtom.scss";
const CVButtom = () => {
  return (
    <div className="download-cv">
      <button onClick={handleDownload}>Download CV</button>
    </div>
  );
};

export default CVButtom;
