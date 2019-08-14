import React, { useState, useEffect } from "react";

const ImageUpload = ({ file }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setLoading(false);
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file]);

  if (!file) return null;
  if (loading) return <p> loading ......</p>;

  return (
    <img
      src={image}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200}
    />
  );
};

export default ImageUpload;
