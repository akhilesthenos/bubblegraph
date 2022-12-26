import React from "react";
import { ErrorMessage, useField, Field } from "formik";

export const TextField = ({ label, max, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="width-93">
        <Field
          className={`form-control form-control-cust shadow-none ${
            meta.touched && meta.error && "is-invalid"
          }`}
          {...field}
          {...props}
          max={max}
          autoComplete="off"
          role="presentation"
        />
        <ErrorMessage
          component="div"
          name={field.name}
          style={{ color: "red", fontSize: ".7rem", position: "absolute" }}
        />
      </div>
    </>
  );
};
