import { Outlet, useLocation } from "react-router-dom";
import { createContext, useMemo } from "react";
import { Header } from "./shared/components/Header/Header";
import { Sidebar } from "./shared/components/Sidebar/Sidebar";
import { Spinner } from "./shared/components/Spinner/Spinner";

export const ApiContext = createContext({});

export const ApiProvider = () => {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/product");

  const value = useMemo(() => ({}), []);

  return (
    <ApiContext.Provider value={value}>
      {!isProductPage && (
        <>
          <Header />
          <div className="main">
            <Spinner />
            <Outlet />
          </div>
          <Sidebar />
        </>
      )}
      {isProductPage && <Outlet />}
    </ApiContext.Provider>
  );
};
