import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  UNPROTETED_ROUTED,
  COMMON_ROUTES,
  ADMIN_PROTETED_ROUTES,
} from "./routes";
import { useAuthentication } from "@/store/Auth";

interface propsType {
  children: React.ReactNode;
  childrenElement?: JSX.Element;
}

const ProtestedRoutes = (props: propsType) => {
  const route = useRouter();

  // GLOBAL STATES
  const isAuthenticated = useAuthentication((state) => state.isAuthenticated);
  const isAdmin = useAuthentication((state) => state.is_admin);

  // HANDLE ROUTE AUTH SECURITY
  useEffect(() => {
    if (!COMMON_ROUTES.includes(route.pathname)) {
      if (isAuthenticated) {
        if (UNPROTETED_ROUTED.includes(route.pathname)) {
          route.replace("/");
        }
        if (ADMIN_PROTETED_ROUTES.includes(route.pathname)) {
          if (!isAdmin) {
            route.replace("/");
          }
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
