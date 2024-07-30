const cleanSet = (set, startString) => {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const cleanedSet = [];
  for (const element of set) {
    if (element.startsWith(startString)) {
      cleanedSet.push(element.slice(startString.length));
    }
  }
  return cleanedSet.join('-');
};

export default cleanSet;
