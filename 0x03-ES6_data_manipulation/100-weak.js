const weakMap = new WeakMap();

export { weakMap };

const queryAPI = (endpoint) => {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const count = weakMap.get(endpoint);
  weakMap.set(endpoint, count + 1);

  if (count > 4) {
    throw new Error('Endpoint load is high');
  }
};

export default queryAPI;
