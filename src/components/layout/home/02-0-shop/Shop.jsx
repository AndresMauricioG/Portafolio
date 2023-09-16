import ShopHeader from "../02-1-header/ShopHeader";
import Cards from "../02-3-cards/Cards";
import { useState } from "react";

export const Cart = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#272727]">
      <ShopHeader count={count}></ShopHeader>
      <Cards count={count} setCount={setCount}></Cards>
    </div>
  );
};
