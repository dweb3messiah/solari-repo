import { Suspense } from "react";

import Spinner from "@/components/common/Spinner";
import Appbar from "@/components/common/Appbar";

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />
      <main>
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
