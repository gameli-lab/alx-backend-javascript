const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position outside the array boundary');
  }
  const newArray = new Int8Array(length);
  newArray[position] = value;
  return newArray;
};

export default createInt8TypedArray;
