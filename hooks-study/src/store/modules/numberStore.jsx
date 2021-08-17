import { observable } from "mobx";

const NumberStore = observable({
    //state
    num: 1,

    //action
    increaseAction(num) {
        this.num = this.num+num;
    },

    decreaseAction(num) {
        this.num = this.num-num;
    }
});

export default NumberStore;