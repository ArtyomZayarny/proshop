import React from "react";
import NavLink from "./NavLink";

interface NavLinkWrapperProps {
  children: React.ReactNode;
  text: string;
  to: string;
}

export default function NavLinkWrapper({
  children,
  text,
  to,
}: NavLinkWrapperProps) {
  return (
    <NavLink to={to}>
      {children}
      <span className="p-2">{text}</span>
    </NavLink>
  );
}
