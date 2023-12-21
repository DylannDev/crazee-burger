import { useState } from "react";
import { MenuData } from "../MenuData/MenuData";

export const useHandleCart = () => {
  const [cart, setCart] = useState(MenuData);

  return { cart, setCart };
};
