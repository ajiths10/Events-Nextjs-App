import React from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();

  const validationSchema = object({
    email: string().email("Enter a valid email").required("Email is required"),
    password: string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <form
      className="flex flex-col items-center gap-8"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        fullWidth
        label="Email Address*"
        name="email"
        autoComplete="email"
        autoFocus
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        name="password"
        label="Password"
        type="password"
        autoComplete="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <span className="w-full flex justify-end items-start mt-[-35px]">
        <button className="p-1 text-sm">forgot password</button>
      </span>
      <button className="w-8/12 h-10 bg-slate-800 rounded-lg text-slate-300 text-lg font-semibold hover:bg-slate-700">
        Login
      </button>
      <div className="w-full text-slate-500">
        <label>
          New user?{" "}
          <button
            onClick={() => {
              router.push("/signup");
            }}
            className="underline font-semibold hover:text-slate-700"
          >
            Create an account.
          </button>
        </label>
      </div>
    </form>
  );
};

export default LoginForm;
