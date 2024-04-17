import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "/src/shared/components/Header/Header.scss";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";
import { getPageTitleFromPath } from "../../ui/PageTitle/PageTitle";

export const Header = () => {
  const [navIsActive, setNavIsActive] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const title = getPageTitleFromPath(location.pathname);
    setPageTitle(title);
  }, [location.pathname]);

  return (
    <>
      <div className="header">
        <div className="menu" onClick={() => setNavIsActive(true)}>
          <span className="icon-menu"></span>
        </div>
        <div className="user">
          <span className="icon-coffee"></span>
        </div>
        <HeaderMenu navIsActive={navIsActive} navClose={() => setNavIsActive(false)} />
        </div>
      <div className="page-title">{pageTitle}</div>
    </>
  );
};
