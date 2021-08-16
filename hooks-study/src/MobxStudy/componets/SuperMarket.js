import React from "react";
import BasketItemList from "./BasketItemList";
import ShopItemList from "./ShopItemList";
import SuperMarketTemplate from "./SuperMarketTemplate";

const SuperMarket = () => {
  return (
    <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItemList />} />
  );
};

export default SuperMarket;
