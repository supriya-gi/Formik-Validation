import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import KMessage from "./KMessage";
import * as yup from "yup";
// const initialValues = {
//   uname: "",
//   pswd: "",
//   options: [],
//   select: "",
//   gender: "",
//   darkmode: "",
// };
const validationSchema = yup.object({
  uname: yup.string().required("UserName is Required!"),
  pswd: yup
    .string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  gender: yup.string().required("must be select"),
});
function Morden() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6 bg-light">
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              uname: "",
              pswd: "",
              selectedOption: "",
              options: [],
              gender: "",
              darkmode: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {/* {({ values }) => { */}
            <Form>
              <div class="mb-3 mt-3">
                <label for="uname" class="form-label">
                  Username:
                </label>
                <Field name="uname" type="text" />
                <KMessage name="uname" />
              </div>

              <div class="mb-3">
                <label for="pwd" class="form-label">
                  Password:
                </label>
                <Field name="pswd" type="password" />
                <KMessage name="pswd" />
              </div>
              <div className="form-group">
                <div className="form-check">
                  {/* <Field name="options" value="opt" /> */}
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check1"
                    name="options"
                    value=""
                  />
                  <label class="form-check-label" for="check1">
                    Option 1
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check2"
                    name="options"
                    value="option2"
                  />
                  <label class="form-check-label" for="check2">
                    Option 2
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check3"
                    name="options"
                    value="option3"
                  />
                  <label class="form-check-label" for="check3">
                    Option 3
                  </label>
                </div>
              </div>
              <div className="form-group">
                {/* <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  name="select"
                  // value={select}
                > */}
                <Field name="selectedOption" as="select">
                  <option selected>Select the option</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </Field>
              </div>
              <div className="form-group">
                <div class="form-check">
                  <Field name="gender" value="female" type="radio" />
                  <label class="form-check-label ml-6" for="flexRadioDefault1">
                    Female
                  </label>
                </div>
                <div class="form-check">
                  <Field name="gender" value="male" type="radio" />
                  <label class="form-check-label ml-6" for="flexRadioDefault2">
                    Male
                  </label>
                </div>
              </div>
              <br />
              <div className="form-group">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="mySwitch"
                    name="darkmode"
                    value="false"
                  />
                  <label class="form-check-label" for="mySwitch">
                    Dark Mode
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </Form>
          </Formik>
          {/* <form action="/action_page.php">
            <div class="mb-3 mt-3">
              <label for="email">Email:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
              />
            </div>
            <div class="form-check">
              <input
                type="radio"
                class="form-check-input"
                id="radio1"
                name="optradio"
                value="option1"
                checked
              />
              <label class="form-check-label" for="radio1">
                Option 1
              </label>
            </div>
            <div class="form-check">
              <input
                type="radio"
                class="form-check-input"
                id="radio2"
                name="optradio"
                value="option2"
              />
              <label class="form-check-label" for="radio2">
                Option 2
              </label>
            </div>
            <div class="form-check">
              <input type="radio" class="form-check-input" />
              <label class="form-check-label">Option 3</label>
            </div>
            <div class="mb-3 text-left">
              <label for="pwd" className="text-left">
                Password:
              </label>
              <input
                type="password"
                class="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
              />
            </div>

            <div class="form-check mb-3">
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="remember"
                />
                Remember me
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default Morden;
