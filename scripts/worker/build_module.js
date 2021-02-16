const { parentPort, workerData } = require('worker_threads');
const execa = require('execa');

execa
  .command(`yarn workspaces foreach --include ${workerData.name} run build`, {
    shell: true,
  })
  .then(() => parentPort.postMessage(`done - ${workerData.name}`))
  .catch((err) => {
    process.exit(err.exitCode);
  });
