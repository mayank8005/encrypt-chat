import React from "react";
import { LABEL } from "./header.constants";
import "./header.css";

const Header = () => (
  <div>
    <h1 className="header">{LABEL.HEADER_TEXT}</h1>
  </div>
);

export default Header;
