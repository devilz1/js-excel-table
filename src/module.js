console.log('Module file');

async function start() {
  return await Promise.resolve('async working!');
}

start()
    .then((r) => console.log('success: ', r))
    .catch((er) => console.log('error: ', er));
