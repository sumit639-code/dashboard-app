import React from "react";
import "@/style/maindash.css";
import "@/style/card.css"
import Cards from "@/components/cards";

const maindash = () => {
  return (
    <>
      <div className="maindash">
        <h1>Dashboard</h1>
        <Cards/>
      </div>
    </>
  );
};

export default maindash;
