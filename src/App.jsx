import React from "react";

// import useAuthUser from "@/hooks/useAuthUser";
import ProtectedRoute from "@/routes/ProtectedRoute";
import PublicRoute from "@/routes/PublicRoute";

export default function App() {
  // const authUser = useAuthUser();

  const authUser = true;

  return authUser ? <ProtectedRoute /> : <PublicRoute />;
}
