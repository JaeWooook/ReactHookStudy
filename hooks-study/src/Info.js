import React, { useContext, useReducer } from "react";

import { UserContext } from "./store/user";
function reducer(state, action) {
  return {
    ...state, //이전의 state들을 그대로 저장해주는것이다.
    [action.name]: action.value,
  };
}
const Info = () => {
  const context = useContext(UserContext);

  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" }); //변경되는 값이 2개이다.
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  //대신에 useReducer를 이용해서 input태그를 관리하려면 각 태그들의 name이 필요하다 name은 물론 state와 동일해야하는것같다.
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b> {nickname}
        </div>
        <div>
          <b>직업 :</b> {context.job}
        </div>
      </div>
    </div>
  );
};

export default Info;
