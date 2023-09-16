import React from "react";
import { Icon } from "@iconify/react";

const ShopNav = ({ count }) => {
  return (
    <nav>
      <ul className="flex justify-center items-center p-[10px] gap-8">
        <li>
          <div className="bg-[#373737] w-auto h-auto p-2 rounded-[8px]">
            <Icon icon="fluent:cart-16-regular" width="40" height="50"/>
            <h1 className="text-center text-white">Products</h1>
            <p className="bg-white">{count}</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default ShopNav;
