type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

function tupleToObject(array) {
  const obj = {};
  array.forEach((val) => {
    obj[val] = val;
  });
  return obj;
}

// 1、返回一个对象
// 2、遍历array T[number]
