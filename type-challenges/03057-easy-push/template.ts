type Push<T extends unknown[], U> = [...T, U];

// js
function push(T, U) {
  return [...T, U];
}
