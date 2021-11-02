import React from "react";
import { NavLink } from "./NavLink";

interface NavLinkWrapperProps {
  children: React.ReactNode;
  text: string;
  to: string;
}

export const NavLinkWrapper: React.FC<NavLinkWrapperProps> = ({
  children,
  text,
  to,
}) => {
  return (
    <NavLink to={to}>
      {children}
      <span className="p-2">{text}</span>
    </NavLink>
  );
};
