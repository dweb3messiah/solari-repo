import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "@/layout/Layout";
import Paths from "@/routes/paths";

const Login = lazy(() => import("@/pages/public/login/Login"));
const Signup = lazy(() => import("@/pages/public/sign-up/Signup"));

const PublicRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path={Paths.HOME}
            element={<Navigate to={Paths.LOGIN} replace="true" />}
          />
          <Route path={Paths.LOGIN} element={<Login />} />
          <Route path={Paths.SIGNUP} element={<Signup />} />
        </Routes>
      </Layout>
    </>
  );
};

export default PublicRoute;
