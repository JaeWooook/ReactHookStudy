import { useState, useEffect } from "react";

export default function usePromise(promiseCreator, deps) {
  //프로미스 함수를 생성하는 promiseCreator
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const process = async () => {
    setLoading(true);
    try {
      const result = await promiseCreator();
      setResolved(result);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    process();
  }, deps); //언제 프로미스를 새로만들지에 대한 deps배열이다. 기본 값은 비어있는 배열이다.
  //비어있는 배열이기 때문에 가장 처음에 렌더링 될때만 실행된다.
  //useEffect를 사용할때는 async 를 사용해서는 안된다. 뒷정리 함수를 반환해야되는데
  //async를 사용하면 함수가 아닌 프로미스를 반환하기 때문에 오류가 발생한다.
  return [loading, resolved, error];
}
