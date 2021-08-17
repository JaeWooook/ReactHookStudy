import React from "react";
import { useObserver } from "mobx-react-lite";
import indexStore from "../../store/modules/indexStore";

const TotalPrice = () => {
  const { marketStore } = indexStore();

  return useObserver(() => (
    <div>
      <hr />
      <p>
        <b>총합: </b> {marketStore.total}원
      </p>
    </div>
  ));
};

export default TotalPrice;
