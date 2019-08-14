import React from "react";
import Dropzone from "react-dropzone";
import ImageUpload from "./ImageUpload";

const dropzoneStyle = {
  width: "100%",
  height: "auto",
  borderWith: 2,
  borderColor: "rgb(102, 102, 102)",
  borderStyle: "dashed",
  borderRadius: 5
};

const DropArea = ({ setFieldValue, values }) => {
  return (
    <Dropzone
      style={dropzoneStyle}
      accept="image/*"
      onDrop={acceptedFiles => {
        if (acceptedFiles.length === 0) return;
        setFieldValue("attachments", values.attachments.concat(acceptedFiles));
      }}
    >
      {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
        if (isDragActive) return "This file is authorized";
        if (isDragReject) return "This file is not authorized";
        if (values.attachments.length === 0)
          return <p>Try dragging a file here !</p>;
        return values.attachments.map((file, ix) => (
          <ImageUpload key={ix} file={file} />
        ));
      }}
    </Dropzone>
  );
};

export default DropArea;
