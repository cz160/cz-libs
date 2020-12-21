const sum = (list: number[]) => {
  return list.reduce((a: number, b: number) => {
    return a + b;
  });
};

export default sum;
