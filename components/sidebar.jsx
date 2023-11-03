"use client";
import React, { useState } from "react";
import "@/style/sidebar.css";
import Image from "next/image";
const sidebar = () => {
  const [state, setstate] = useState(0);
  console.log(state);
  return (
    <>
      <div className="sidebar">
        <span className="title">
          <Image
            className="icons"
            src="/icons/shopping-bag.png"
            height={50}
            width={50}
          />
          SHOP
        </span>
        <span className="menu">
          <div
            className={state===1?"menuitem color":"menuitem"}
            onClick={() => {
              setstate(1);
              console.log(state);
            }}
          >
            <Image
              className="icons2"
              src="/icons/home.png"
              height={50}
              width={50}
            />
            Dashboard
          </div>
          <div 
          className={state===2?"menuitem color":"menuitem"}
          onClick={() => {
            setstate(2);
            console.log(state);
          }}>
            <Image
              className="icons2"
              src="/icons/clipboard.png"
              height={50}
              width={50}
            />
            orders
          </div>
          <div className={state===3?"menuitem color":"menuitem"}
            onClick={() => {
              setstate(3);
              console.log(state);
            }}>
            <Image
              className="icons2"
              src="/icons/customer.png"
              height={50}
              width={50}
            />
            Customer
          </div>
          <div className={state===4?"menuitem color":"menuitem"}
            onClick={() => {
              setstate(4);
              console.log(state);
            }}>
            <Image
              className="icons2"
              src="/icons/product.png"
              height={50}
              width={50}
            />
            Products
          </div>
          <div className={state===5?"menuitem color":"menuitem"}
            onClick={() => {
              setstate(5);
              console.log(state);
            }}>
            <Image
              className="icons2"
              src="/icons/chart.png"
              height={50}
              width={50}
            />
            Analytics
          </div>
        </span>
      </div>
    </>
  );
};

export default sidebar;
