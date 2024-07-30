const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside the array boundary');
  }
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  return dataView;
};

export default createInt8TypedArray;
