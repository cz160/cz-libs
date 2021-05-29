import { useEffect } from 'react';

const useUnmount = (fn: () => void) => {
  useEffect(() => () => fn());
};

export default useUnmount;
