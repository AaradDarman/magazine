import React, { useState } from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  userName: Yup.string().required("نام کاربری را بنویسید."),
  email: Yup.string()
    .email("فرمت وارد شده معتبر نمی باشد")
    .required("پر کردن این فیلد الزامی میباشد"),
  password: Yup.string()
    .label("Password")
    .required("پر کردن این فیلد الزامی میباشد")
    .min(8, "رمز عبور باید بیشتر از 8 حرف باشد"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور مطابقت ندارد")
    .required("پر کردن این فیلد الزامی میباشد"),
});
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Formik
      initialValues={{
        userName,
        email,
        password,
        confirmPassword,
      }}
      validationSchema={SignupSchema}
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
          <h6>ثبت نام</h6>
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
              large
              onChange={(e) => {
                setUserName(e.target.value);
                setFieldValue("userName", e.target.value);
              }}
              value={values.userName}
              onBlur={handleBlur("userName")}
              type="text"
              id="username-input"
            />
          </FormGroup>
          <FormGroup
            helperText={errors.email && touched.email ? errors.email : ""}
            label="ایمیل"
            labelFor="email-input"
            labelInfo="*"
          >
            <InputGroup
              intent={
                errors.email && touched.email
                  ? "danger"
                  : touched.email && "success"
              }
              onChange={(e) => {
                setEmail(e.target.value);
                setFieldValue("email", e.target.value);
              }}
              value={values.email}
              onBlur={handleBlur("email")}
              large
              type="email"
              id="email-input"
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
          <FormGroup
            helperText={
              errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : ""
            }
            label="تکرار رمز عبور"
            labelFor="password-input-repeat"
            labelInfo="*"
          >
            <InputGroup
              intent={
                errors.confirmPassword && touched.confirmPassword
                  ? "danger"
                  : touched.confirmPassword && "success"
              }
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setFieldValue("confirmPassword", e.target.value);
              }}
              value={values.confirmPassword}
              onBlur={handleBlur("confirmPassword")}
              large
              type="password"
              id="password-input-repeat"
            />
          </FormGroup>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-100 btn btn-primary"
          >
            ثبت نام
          </button>
        </>
      )}
    </Formik>
  );
};

export default SignUp;
