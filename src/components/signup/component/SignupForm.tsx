import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { object, string, ref, boolean } from "yup";
import { useRouter } from "next/router";
import { usePostSignup } from "@/services/auth/signup";
import { useSetAlert } from "@/store/Alert";
import FormSelect from "@/components/common/form/Select";
import {
  useGetCountryOptions,
  useGetStateOptions,
} from "@/components/common/hooks/common";
import { ISignUpInitialValues } from "../type";

let initialValues: ISignUpInitialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
  agree_terms: false,
  country: { label: "United States", value: "US" },
  state: { label: "Texas", value: "TX" },
};

const SignupForm = () => {
  const router = useRouter();
  const [Country, setCountry] = useState("");

  //service
  const signupmutate = usePostSignup();

  const setAlert = useSetAlert((state) => state.setAlert);

  //CUSTOM HOOK
  const countryOptions = useGetCountryOptions();
  const stateOptions = useGetStateOptions(Country);

  const validationSchema = object({
    first_name: string().required("required"),
    last_name: string().required("required"),
    email: string().email("Enter a valid email").required("Email is required"),
    password: string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirm_password: string()
      .oneOf([ref("password"), null], "Passwords must match")
      .required("required"),
    agree_terms: boolean().oneOf([true], "required"),
    country: object()
      .nullable()
      .shape({
        label: string().required(),
        value: string().required(),
      })
      .required("Required"),
  });
  const handleRedirection = () => router.push("/login");

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signupmutate.mutate(values, {
        onSuccess(data, variables, context) {
          setAlert({ ...data.data });
          if (data?.data?.status) {
            handleRedirection();
          }
        },
        onError(error, variables, context) {
          //setAlert({ ...error.response.data });
        },
        onSettled(data, error, variables, context) {
          //setAlert({ ...data.response.data });
        },
      });
    },
  });

  return (
    <form
      className="flex flex-col items-center gap-5"
      onSubmit={formik.handleSubmit}
    >
      <span className="grid md:flex md:justify-between w-full md:gap-4 gap-8">
        <TextField
          fullWidth
          label="First Name*"
          name="first_name"
          autoComplete="first_name"
          autoFocus
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name && Boolean(formik.errors.first_name)}
          helperText={formik.touched.first_name && formik.errors.first_name}
        />
        <TextField
          fullWidth
          label="Last Name*"
          name="last_name"
          autoComplete="last_name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          error={formik.touched.last_name && Boolean(formik.errors.last_name)}
          helperText={formik.touched.last_name && formik.errors.last_name}
        />
      </span>
      <TextField
        fullWidth
        label="Email Address*"
        name="email"
        autoComplete="email"
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
      <TextField
        fullWidth
        name="confirm_password"
        label="Confirm Password"
        type="password"
        value={formik.values.confirm_password}
        onChange={formik.handleChange}
        error={
          formik.touched.confirm_password &&
          Boolean(formik.errors.confirm_password)
        }
        helperText={
          formik.touched.confirm_password && formik.errors.confirm_password
        }
      />
      <FormSelect
        parentClass={"w-full bg-transparent"}
        containerClass={"w-full bg-transparent border-red-600"}
        label="Country"
        name="country"
        options={countryOptions}
        isClearable={true}
        formik={formik}
      />
      <FormSelect
        parentClass={"w-full bg-transparent"}
        containerClass={"w-full bg-transparent border-red-600"}
        label="State"
        name="state"
        options={stateOptions}
        isClearable={true}
        formik={formik}
      />
      <div
        className={`${
          formik.touched.agree_terms && formik.errors.agree_terms
            ? "text-[#d32f2f]"
            : ""
        } w-full`}
      >
        <input
          type="checkbox"
          name="agree_terms"
          id="agree_terms"
          onChange={formik.handleChange}
        />{" "}
        <label htmlFor="agree_terms"> I agree to the terms of services.</label>
        <br />
        <span className="text-xs">
          {formik.touched.agree_terms && formik.errors.agree_terms}
        </span>
      </div>
      <button className="w-8/12 h-10 bg-slate-800 rounded-lg text-slate-300 text-lg font-semibold hover:bg-slate-700">
        Signup
      </button>
      <div className="w-full text-slate-500">
        <label>
          Already have an account?{" "}
          <button
            onClick={() => {
              router.push("/login");
            }}
            type="button"
            className="underline font-semibold hover:text-slate-700"
          >
            Login here.
          </button>
        </label>
      </div>
    </form>
  );
};

export default SignupForm;
