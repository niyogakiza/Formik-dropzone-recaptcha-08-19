import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import yup from "yup";
import RecaptchaArea from "./Recaptcha";
import DropZone from "./Dropzone";

import "./styles.css";

function App() {
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <div className="Container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          photo: null,
          attachments: [],
          recaptcha: ""
        }}
        onSubmit={async values => {
          const formData = new FormData();
          formData.append("name", values.name);
          formData.append("email", values.email);
          formData.append("photo", values.photo);

          values.attachments.map((value, ix) =>
            formData.append(`attachements[${ix}]`, value.attachments[ix])
          );
          formData.append("recaptcha", values.recaptcha);

          /** Submit with fetch ex: const res = await fetch('postUrl', {method: 'POST', body: formData }) */
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required(),
          email: yup
            .string()
            .email()
            .required(),
          recaptcha: yup.string().required()
        })}
        render={{}}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
