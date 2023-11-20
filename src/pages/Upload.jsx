import React, { useEffect, useState } from "react";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('selected file', selectedFile)
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const options = {
        method: "POST",
        body: formData, // Set formData directly as the body
      };
      fetch("http://54.88.75.83:8080/analyze-image", options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    }

  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Upload Image</button>
      </form>
    </>
  );
}

export default Upload;
