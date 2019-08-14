import React, { Fragment } from "react";
import Recaptcha from "react-recaptcha";

const RecaptchaArea = ({ setFieldValue, errors, touched }) => {
  return (
    <Fragment>
      <label>Recaptcha validation</label>
      <Recaptcha
        sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
        render="explicit"
        theme="dark"
        verifyCallback={response => setFieldValue("recaptcha", response)}
        onloadCallback={() => console.warn("done loading")}
      />
      {errors.recaptcha && touched.recaptcha && <p>{errors.recaptcha}</p>}
    </Fragment>
  );
};

export default RecaptchaArea;
