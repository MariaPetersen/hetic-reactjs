import React from "react";
import Tab from "./../Tab/Tab";
import "./styles.scss";

export default function Filter({ setCategory }) {
  function handleCategoryChange(category) {
    setCategory(category);
  }

  return (
    <div className="categories">
      <Tab onClick={() => handleCategoryChange("all")} text="Toutes" />
      <hr className="verticalLine" />
      <Tab onClick={() => handleCategoryChange("todo")} text="Non terminées" />
      <hr className="verticalLine" />
      <Tab onClick={() => handleCategoryChange("completed")} text="Terminées" />
    </div>
  );
}
