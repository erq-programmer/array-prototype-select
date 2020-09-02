interface String {
  select(startIdx: number, endIdx: number, step: number): Array<T>;
}

String.prototype.select = function <T>(
  startIdx: number = 0,
  endIdx: number = 0,
  step: number = 1
): Array<T> {
  let temp: Array<T> = this;

  if (startIdx < 0 && Math.abs(startIdx) < Math.abs(endIdx))
    temp = temp.slice(endIdx, startIdx);
  else if (startIdx !== 0 && endIdx > 0) temp = temp.slice(startIdx, endIdx);
  else if (startIdx !== 0) temp = temp.slice(startIdx);
  else if (endIdx !== 0) temp = temp.slice(0, endIdx);

  if (step > 1) {
    temp = temp.filter((_, idx) => idx % step === 0);
  }

  return temp;
};
