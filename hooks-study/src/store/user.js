import React, { createContext } from "react";
//Context를 생성할 때는 createContext이다
export const UserContext = createContext(); //실행하면 비어있는 context가 반환된다.
//export 처리를 해줘야한다 저것의 반환된 값을 사용하는것이기 때문이다.
const UserStore = (props) => {
  const users = {
    name: "goodmans",
    job: "mojik",
  };
  return (
    <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
  ); //리턴에 아까 적었던 프로바이더를 적어준다.
}; //value에 전달하고자하는 객체를 적는다.
//그리고 사이에는 props.children을 사용해서 하위 컴포넌트를 렌더링해준다.
export default UserStore;
