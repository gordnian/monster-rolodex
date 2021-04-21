import React from "react";
import "./searchbox.style.css";

export const SearchBox = ({ placeHolder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeHolder}
    onChange={handleChange}
  />
);
