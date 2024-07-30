const cleanSet = (set, startString) => {
  const cleanedSet = new Set();
  for (const element of set) {
    cleanedSet.add(element.replace(startString, '-'));
  }
  return cleanedSet;
};

export default cleanSet;
