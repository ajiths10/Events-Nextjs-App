import React from "react";
import LoginForm from "./component/LoginForm";

const LoginComponent = () => {
  return (
    <div className="grid my-10 m-auto w-11/12">
      <h2 className="font-bold text-4xl pt-10">Hello.</h2>
      <p className=" font-semibold text-slate-500 pt-3 pb-5">
        Welcome back, please enter your login credentials
      </p>
      <LoginForm />
      <div className="w-full absolute bottom-5 text-center text-slate-500 text-sm">
        <p>Copyright 2023 events community</p>
      </div>
    </div>
  );
};

export default LoginComponent;
