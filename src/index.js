import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Formik, ErrorMessage } from "formik";
import yup from "yup";
import RecaptchaArea from "./Recaptcha";
import DropZone from "./Dropzone";

import "./styles.css";

function App() {
  const initialValues = { name: "" };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(null);
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
        render={({}) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && <p>{errors.name}</p>}
            </div>
            <div />
          </form>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
