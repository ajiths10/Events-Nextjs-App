import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { UNPROTETED_ROUTED, COMMON_ROUTES } from "./routes";
import { useAuthentication } from "@/store/Auth";

interface propsType {
  children: React.ReactNode;
  childrenElement?: JSX.Element;
}

const ProtestedRoutes = (props: propsType) => {
  const route = useRouter();

  //global states
  const isAuthenticated = useAuthentication((state) => state.isAuthenticated);

  useEffect(() => {
    if (!COMMON_ROUTES.includes(route.pathname)) {
      if (isAuthenticated) {
        if (UNPROTETED_ROUTED.includes(route.pathname)) {
          route.replace("/");
        }
      } else {
        if (!UNPROTETED_ROUTED.includes(route.pathname)) {
          route.replace("/login");
        }
      }
    }
  }, [route, isAuthenticated]);

  return <>{props.children}</>;
};

export default ProtestedRoutes;
