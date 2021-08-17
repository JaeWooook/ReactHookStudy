import React from "react";
import "./BasketItem.css";
import { useObserver } from "mobx-react-lite";

const BasketItem = ({ item, onTake }) => {
  return useObserver(() => (
    <div className="BasketItem">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}</div>
      <div className="count">{item.count}</div>
      <div className="return" onClick={() => onTake(item.name)}>
        전체 취소
      </div>
    </div>
  ));
};

export default BasketItem;
