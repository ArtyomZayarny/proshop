import React from "react";
import NavLink from "./NavLink";

export default function NavLinkWrapper({ children, text, to }) {
  return (
    <NavLink to={to}>
      {children}
      <span className="p-2">{text}</span>
    </NavLink>
  );
}
