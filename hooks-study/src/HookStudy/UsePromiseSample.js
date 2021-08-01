import React from "react";
import usePromise from "./usePromise";

const wait = () => {
  //3초 후에 끝나는 프로미스를 반환
  return new Promise((resolve) =>
    setTimeout(() => resolve("Hello hooks!"), 3000)
  );
};

const UsePromiseSample = () => {
  const [loading, resolved, error] = usePromise(wait, []); //deps가 빈배열인 이유 빈배열을 넣기 때문이다.

  if (loading) return <div>로딩중..!</div>; //로드를 하는 시간인 3초 동안은 loading이 true일것이고, 이후에는 false로 바뀌고
  if (error) return <div>에러 발생!</div>;
  if (!resolved) return null; //resolved가 그동안 null이기 때문에 true로 null이고 이후에 Hello hooks!가 보여질 것이다!

  return <div>{resolved}</div>;
};

export default UsePromiseSample;
