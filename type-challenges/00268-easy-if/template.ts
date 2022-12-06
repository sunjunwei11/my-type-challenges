type If<C extends boolean, T, F> = C extends true ? T : F;

// js
function If(C, T, F) {
  return C ? T : F;
}
