import React from "react";
import { Helmet } from "react-helmet-async";

import Paths from "@/routes/paths";
import SignUpForm from "@/components/ui/public/sign-up/SignUpForm";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>No Name | SignIn</title>
        <meta name="description" content="" />
        <link rel="canonical" href={Paths.SIGNUP} />
      </Helmet>

      <div>
        <SignUpForm />
      </div>
    </>
  );
};

export default Signup;
