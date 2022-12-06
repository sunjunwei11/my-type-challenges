// 返回T的子集，其中的key需要在K中
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js对比
function myPick(todo, keys: string[]) {
  const obj = {};
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}
