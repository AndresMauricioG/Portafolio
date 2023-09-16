import React from "react";
import ShopNav from "../02-2-nav/ShopNav";

const ShopHeader = ({ count }) => {
  return (
    <div className="bg-[#303030]">
      <ShopNav count={count}></ShopNav>
    </div>
  );
};

export default ShopHeader;
