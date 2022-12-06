interface Promise1<T> {
  then: (onfulfilled: (arg: T) => any) => any;
}
type MyAwaited<T extends Promise1<unknown>> = T extends Promise1<infer X>
  ? X extends Promise1<unknown>
    ? MyAwaited<X>
    : X
  : never;

// 前面的extends用来限制类型，后面的extends用来解构（作为条件判断）

// infer
// 1、只能在条件类型里面使用
// 2、设置未知数 变量
