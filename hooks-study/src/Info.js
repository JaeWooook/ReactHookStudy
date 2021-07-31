import React, { useState, useEffect, useContext } from "react";
//Context를 사용할때는 useContext를 이용한다.
import { UserContext } from "./store/user";

const Info = () => {
  const context = useContext(UserContext); //반환을 받으면
  //context가 해당되는 객체이다.

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, []);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickname} onChange={onChangeNickname}></input>
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
