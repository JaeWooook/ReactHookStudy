import { useState, useEffect } from "react";

export default function usePromise(promiseCreator, deps) {
  //프로미스 함수를 생성하는 promiseCreator
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const process = async () => {
    setLoading(true); //true값 만들어주고,
    try {
      const result = await promiseCreator(); //promise생성 해주고 이게 wait 펑션이된다?
      setResolved(result); //생성된 프로미스 넣어주고
    } catch (e) {
      setError(e); //에러처리
    }
    setLoading(false); //false로 만들어주면서닫아준다.
  };

  useEffect(() => {
    process(); //처음 렌더링될때 프로미스한번만 동작하게 하기위함
    console.log(deps);
  }, deps); //언제 프로미스를 새로만들지에 대한 deps배열이다. 기본 값은 비어있는 배열이다.
  //비어있는 배열이기 때문에 가장 처음에 렌더링 될때만 실행된다.
  //useEffect를 사용할때는 async 를 사용해서는 안된다. 뒷정리 함수를 반환해야되는데
  //async를 사용하면 함수가 아닌 프로미스를 반환하기 때문에 오류가 발생한다.
  return [loading, resolved, error]; //반환 하는 값을 Sample에서 그대로 사용한다.
}
