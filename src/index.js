import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import yup from "yup";
import RecaptchaArea from "./Recaptcha";
import DropZone from "./Dropzone";

// import "./styles.css";

function App() {
  const initialValues = {
    name: "",
    email: "",
    photo: null,
    attachments: [],
    recaptcha: ""
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(null);
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <div className="Container">
      <Formik
        initialValues={initialValues}
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
        render={({ values, errors, touched, setFieldValue }) => (
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
            <div className="form-group">
              <label>Photo</label>
              <input
                id="photo"
                name="name"
                type="file"
                className="form-control"
                onChange={event => {
                  setFieldValue("photo", event.currentTarget.files[0]);
                }}
              />
            </div>

            <div className="form-group">
              <label>Multiple files</label>
              <DropZone setFieldValue={setFieldValue} values={values} />
            </div>

            <div className="form-group">
              <label>Recaptcha Validation</label>
              <RecaptchaArea
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
              {errors.recaptcha && touched.recaptcha && (
                <p>{errors.recaptcha}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
