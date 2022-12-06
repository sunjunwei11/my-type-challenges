type Unshift<T extends unknown[], U> = [U, ...T];

// js
function unshift(T, U) {
  return [U, ...T];
}
