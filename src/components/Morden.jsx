import React from "react";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      " /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  phone: Yup.string()
    .max(10, "Phone Number should be minimum 10 digit")
    .required("Phone Number is required"),
  rememberMe: Yup.bool().oneOf(
    [true],
    "You need to accept the terms and conditions"
  ),
  category: Yup.string().required("Select first"),
  gender: Yup.string().required("Gender must be select"),
  togglebutton: Yup.boolean().oneOf([true]).required("You need to Switch"),
});

const Morden = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-lg-8">
          <Formik
            initialValues={{
              email: " ",
              password: "",
              phone: "",
              rememberMe: false,
              selectOption: "",
              gender: "",
              category: "",
              togglebutton: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
              alert("Form is validated! Submitting the form...");
            }}
          >
            {({
              touched,
              errors,
              isSubmitting,
              values,
              handleChange,
              handleBlur,
            }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Formik Form</h1>
                  </div>
                </div>
                <Form>
                  <div className="form-group">
                    <label htmlFor="email">
                      <strong>Email</strong>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      autoComplete="off"
                      className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="mt-3">
                      <strong> Password</strong>
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="phone">
                      <strong>Phone Number</strong>
                    </label>
                    <Field
                      type="number"
                      name="phone"
                      placeholder="Enter phone"
                      autoComplete="off"
                      className={`mt-2 form-control
                          ${touched.phone && errors.phone ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage
                      component="div"
                      name="phone"
                      className="invalid-feedback"
                    />
                  </div>
                  <div>
                    <div className="form-group mt-4">
                      <label htmlFor="category">
                        <strong> Choose your browser from the list:</strong>
                      </label>
                      <select
                        id="category"
                        name="category"
                        className={`mt-2 form-control
                         ${
                           touched.category && errors.category
                             ? "is-invalid"
                             : ""
                         }`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category}
                      >
                        <option value="">Select</option>
                        <option value="Chrome">Chrome</option>
                        <option value="Firefox">Firefox</option>
                        <option value="Opera">Opera</option>
                        <option value="Safari">Safari</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="me-3">
                      <strong>Select Gender :</strong>
                    </label>

                    <label className="me-3">
                      Female
                      <Field type="radio" name="gender" value="Female" />
                    </label>
                    <label className="ms-3">
                      Male
                      <Field type="radio" name="gender" value="Male" />
                    </label>
                    {errors.gender && (
                      <p style={{ color: "#dc3545" }}>{errors.gender}</p>
                    )}
                  </div>
                  <div className="mt-4">
                    <label className="form-check form-switch">
                      <Field
                        type="checkbox"
                        name="togglebutton"
                        className="form-check-input"
                      />
                      <label class="form-check-label" for="mySwitch">
                        <strong>Dark Mode</strong>
                      </label>
                    </label>
                    {errors.togglebutton && (
                      <p style={{ color: "#dc3545" }}>{errors.togglebutton}</p>
                    )}
                  </div>

                  <div className="mt-2">
                    <label className="ms-4">
                      <strong> Term and Conditions</strong>
                      <Field type="checkbox" name="rememberMe" />
                    </label>
                    {errors.rememberMe && (
                      <p style={{ color: "#dc3545" }}>{errors.rememberMe}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  >
                    Submit
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Morden;
