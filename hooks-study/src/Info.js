import React, { useContext } from "react";
import useInputs from "./useInput";
import { UserContext } from "./store/user";

const Info = () => {
  const context = useContext(UserContext);
  const [state, onChange] = useInputs({ name: "", nickname: "" }); //기존에 있었던 useReducer의 기능을 새로 useInputs hook을 생성해서 대체한다.
  const { name, nickname } = state;
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
