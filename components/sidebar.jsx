import React from "react";
import "@/style/sidebar.css";
import Image from "next/image";
const sidebar = () => {
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
          <div className="menuitem">
            <Image
              className="icons2"
              src="/icons/home.png"
              height={50}
              width={50}
            />
            Dashboard
          </div>
          <div className="menuitem">
            <Image
              className="icons2"
              src="/icons/clipboard.png"
              height={50}
              width={50}
            />
            orders
          </div>
          <div className="menuitem">
            <Image
              className="icons2"
              src="/icons/customer.png"
              height={50}
              width={50}
            />
            Customer
          </div>
          <div className="menuitem">
            <Image
              className="icons2"
              src="/icons/product.png"
              height={50}
              width={50}
            />
            Products
          </div>
          <div className="menuitem">
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
