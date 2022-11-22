import React from "react";
import { ErrorMessage } from "formik";

const KMessage = ({ name }) => {
  return (
    <div style={{ color: "red" }}>
      <ErrorMessage name={name} />
    </div>
  );
};

export default KMessage;
