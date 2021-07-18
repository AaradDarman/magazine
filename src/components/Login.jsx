import { Checkbox, FormGroup, InputGroup } from "@blueprintjs/core";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  userName: Yup.string().required("لطفا نام کاربری یا ایمیلت رو وارد کن."),
  password: Yup.string().required("لطفا رمزعبورت رو وارد کن."),
});

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const passElem = useRef(null);
  return (
    <Formik
      initialValues={{
        userName,
        password,
      }}
      validationSchema={LoginSchema}
      onSubmit={() => console.log("submit")}
    >
      {({
        values,
        handleBlur,
        errors,
        touched,
        setFieldValue,
        handleSubmit,
      }) => (
        <>
          <h6>ورود</h6>
          <FormGroup
            helperText={
              errors.userName && touched.userName ? errors.userName : ""
            }
            label="نام کاربری"
            labelFor="username-input"
            labelInfo="*"
          >
            <InputGroup
              intent={
                errors.userName && touched.userName
                  ? "danger"
                  : touched.userName && "success"
              }
              onChange={(e) => {
                setUserName(e.target.value);
                setFieldValue("userName", e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  passElem.current.focus();
                }
              }}
              value={values.userName}
              onBlur={handleBlur("userName")}
              large
              type="text"
              id="username-input"
            />
          </FormGroup>
          <FormGroup
            helperText={
              errors.password && touched.password ? errors.password : ""
            }
            label="رمز عبور"
            labelFor="password-input"
            labelInfo="*"
          >
            <InputGroup
              intent={
                errors.password && touched.password
                  ? "danger"
                  : touched.password && "success"
              }
              inputRef={passElem}
              onChange={(e) => {
                setPassword(e.target.value);
                setFieldValue("password", e.target.value);
              }}
              value={values.password}
              onBlur={handleBlur("password")}
              large
              type="password"
              id="password-input"
            />
          </FormGroup>
          <Checkbox className="my-2" label="منو یادت باشه" />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-100 btn btn-primary"
          >
            ورود
          </button>
        </>
      )}
    </Formik>
  );
};

export default Login;
