// T里的字段都设置为只读
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface TODO {
  key1: string;
  key2: number;
}

type R = keyof TODO; // 'key1 | key2'
const r1: R = "key1";

// js
function readonly(obj) {
  const result = {};
  for (const key of obj) {
    result["readonly" + key] = obj[key];
  }
  return result;
}

// 1、返回一个对象
// 2、遍历obj
// 3、加上readonly关键字
// 4、通过key来获取obj（接口）里面的值
