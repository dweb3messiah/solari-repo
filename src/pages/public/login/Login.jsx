import React from "react";
import { Helmet } from "react-helmet-async";

import Paths from "@/routes/paths";
import LoginForm from "@/components/ui/public/login/LoginForm";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>No Name | Login</title>
        <meta name="description" content="" />
        <link rel="canonical" href={Paths.LOGIN} />
      </Helmet>

      <div className="">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
