import { useEffect, useRef } from 'react';

const useUpdateEffect = (fn: () => void, deps: any[]) => {
  const isMount = useRef(false);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
    } else {
      return fn();
    }
  }, deps);
};

export default useUpdateEffect;
