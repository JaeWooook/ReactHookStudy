import { observable } from "mobx";
import NumberStore from "./numberStore";

const marketStore = observable({
    //state
    selectedItems:[],

    //action
    put(name, price) {
        const exists = this.selectedItems.find(item=>item.name===name);
        if(NumberStore.num!==0) {//0인경우 이상한 에러가 발생하면서 계산이안되기 때문이다.
            if(!exists) {
                //존재하지 않으면 새로 추가한다.
                this.selectedItems.push({
                    name,
                    price,
                    count: NumberStore.num,
                });
                return;
            }
            exists.count+=NumberStore.num;
        }
    },

    take(name) {
        const itemToTake = this.selectedItems.find(item=>item.name===name);
        itemToTake.count=0;
        if(itemToTake.count===0) {
            //갯수가 0이면 배열에서 제거처리한다
            this.selectedItems.remove(itemToTake);
        }
    },

    get total() {
        console.log("총합 계산...");
        return this.selectedItems.reduce((previous, current)=> {
            return previous+current.price * current.count;
        }, 0);
    },
});

export default marketStore;