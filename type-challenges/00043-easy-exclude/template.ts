// 返回T里不在U里的值
// T extends U可以理解为T里的值会一个个判断是否在U里，不在的话才返回，这里的T可以理解为TItem
type MyExclude<T, U> = T extends U ? never : T;

// js
// ['a', 'b', 'c']
// ['a']
function myExclude(T: any[], U: any[]) {
  return T.filter((item) => !U.includes(item));
}
