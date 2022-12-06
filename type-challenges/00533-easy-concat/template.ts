type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type Concat1<T extends unknown[], U extends unknown[]> = T extends [
  ...infer T1,
  infer T2
]
  ? T2
  : T;

type C1 = Concat1<[string, number, boolean], []>;

// js
function concat(arrA, arrB) {
  return [...arrA, ...arrB];
}
