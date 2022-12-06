// 1、方法1 extends
// type First<T extends any[]> = T extends [] ? never : T[0];

//2、 方法2 length
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

// 3、方法3
// type First<T extends any[]> = T[0] extends T[number] ? never : T[0];
type Args = [6, "hello", "ok"];
// union
type T1 = Args[number]; // 6 | "hello" | 'ok

type T2 = 6 extends T1 ? "true" : "false";

// type Tempty = [];

// type T3 = Tempty[number]; // never;

// type T4 = Tempty[0]; // undefined

// 4、方法4
// 能解构出就返回F，否则返回never
type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never;

type Tail<T extends any[]> = T extends [infer F, ...infer Rest] ? Rest : never;

type Tail1 = Tail<[1, 2, 3]>; // [2, 3]
type Tail2 = Tail<[1]>; // []
type Tail3 = Tail<[]>; // never

// 空数组返回的第一个元素类型是undefined
type First1 = First<[]>;

// js
function first(arr: any[]) {
  // arr 如果是空数组返回nerver
  return arr[0];
}

// 知识点
// 1、extends类型条件判断
// 2、获取tuple的length属性 indexed
// 3、extends union判断的规则
// 4、infer的使用（推断）
