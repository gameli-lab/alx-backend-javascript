function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) { resolve('true'); } else { reject(new Error('false')); }
    }, 1000);
  });
}
