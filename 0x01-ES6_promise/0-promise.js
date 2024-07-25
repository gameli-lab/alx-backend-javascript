function getResponseFromAPI () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) { resolve('API responded'); } else { reject(new Error('API failed')); }
    }, 1000);
  });
}
