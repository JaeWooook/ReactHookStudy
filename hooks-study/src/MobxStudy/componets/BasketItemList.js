import React from "react";
import { useObserver } from "mobx-react-lite";
import indexStore from "../../store/modules/indexStore";
import BasketItem from "./BasketItem";

const BasketItemList = () => {
  const { marketStore } = indexStore();

  const onTake = (name) => {
    marketStore.take(name);
  };

  return useObserver(() => {
    const itemList = marketStore.selectedItems.map((item) => (
      <BasketItem item={item} key={item.name} onTake={onTake} />
    ));
    return <div>{itemList}</div>;
  });
};

export default BasketItemList;
