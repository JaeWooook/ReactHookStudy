import React from "react";
import indexStore from "../../store/modules/indexStore";
import { useObserver } from "mobx-react-lite";
import ShopItem from "./ShopItem";

const items = [
  { name: "생수", price: 850 },
  { name: "신라면", price: 900 },
  { name: "포카칩", price: 1500 },
  { name: "새우깡", price: 1000 },
];

const ShopItemList = () => {
  const { marketStore } = indexStore();

  const onPut = (name, price) => {
    marketStore.put(name, price);
  };
  return useObserver(() => {
    const itemList = items.map((item) => (
      <ShopItem {...item} key={item.name} onPut={onPut} />
    ));
    return <div>{itemList}</div>;
  });
};

export default ShopItemList;
