type Length<T extends readonly any[]> = T["length"];

// js
function getLength(arr) {
  if (!Array.isArray) return;
  return arr.Length;
}

// 知识点
// tuple 固定长度和类型的数组
type StringNumberPair = [string, number]; // tuple
type T1 = StringNumberPair["length"]; // 2 因为长度是固定的
const str: StringNumberPair = ["11", 11];

// string
type StringArray = string[];
type T2 = StringArray["length"]; // number 因为长度是不固定的
