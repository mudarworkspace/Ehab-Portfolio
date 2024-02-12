import React, { useState } from "react";
import "./CVButtom.scss";

const CVButton = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    fetch("/Ehab Abdulhay Abou Fakher.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const anchor = document.createElement("a");

        anchor.href = blobUrl;
        anchor.download = "Ehab Abdulhay Abou Fakher.pdf";

        anchor.click();
        URL.revokeObjectURL(blobUrl);
        setLoading(false);
      });
  };

  return (
    <div className="download-cv">
      <button onClick={handleDownload} disabled={loading} className={loading ? "disabled" : ""}>
        {loading ? "Downloading..." : "Download CV"}
      </button>
    </div>
  );
};

export default CVButton;
