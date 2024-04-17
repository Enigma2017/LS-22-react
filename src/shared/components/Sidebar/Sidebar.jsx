import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/"className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
        <span className="sidebar-link__icon icon-home"></span>
      </NavLink>
      <NavLink to="/cart"className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
      <span className="sidebar-link__icon icon-cart"></span>
      </NavLink>
      <NavLink to="/favorites"className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
      <span className="sidebar-link__icon icon-heart"></span>
      </NavLink>
      <NavLink to="/notification"className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
      <span className="sidebar-link__icon icon-bell"></span>
      </NavLink>
    </div>
  );
};
