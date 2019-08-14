import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";
import yup from "yup";
import Dropzone from "react-dropzone";
import Recaptcha from "react-recaptcha";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
