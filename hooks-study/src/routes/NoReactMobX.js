import {
  decorate,
  observable,
  reaction,
  computed,
  autorun,
  action,
  transaction,
} from "mobx";

class GS25 {
  basket = [];

  get total() {
    console.log("계산 중입니다..!");

    return this.basket.reduce((prev, curr) => prev + curr.price, 0);
  }

  select(name, price) {
    this.basket.push({ name, price });
  }
}

decorate(GS25, {
  basket: observable,
  total: computed,
  select: action,
});

const gs25 = new GS25();
autorun(() => gs25.total);
//새 데이터 추가 될때마다 알림이 뜬다.
autorun(() => {
  if (gs25.basket.length > 0) {
    console.log(gs25.basket[gs25.basket.length - 1]);
  }
});
transaction(() => {
  gs25.select("물", 800);
  gs25.select("물", 800);
  gs25.select("포카칩", 1500);
});

console.log(gs25.total);

//결과
// 계산중입니다..!
// 계산중입니다..!
// 800
// 계산중입니다..!
// 1600
// 계산중입니다..!
// 3100
