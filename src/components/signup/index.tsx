import React from "react";
import SignupForm from "./component/SignupForm";

const SignUpComponent = () => {
  return (
    <div className="grid my-10 m-auto w-11/12">
      <h2 className="font-bold text-4xl pt-5">Hello.</h2>
      <p className=" font-semibold text-slate-500 pt-3 pb-5">
        Create a free account, please enter your details.
      </p>
      <SignupForm />
      <div className="w-full absolute bottom-5 text-center text-slate-500 text-sm">
        <p>Copyright 2023 events community</p>
      </div>
    </div>
  );
};

export default SignUpComponent;
