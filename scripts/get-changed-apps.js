#!/usr/bin/env node
const execa = require('execa');
const program = require('commander');
const EventEmitter = require('events');

// Increase the default limit to avoid memory leaks
EventEmitter.defaultMaxListeners = 100;

/**
 * List packages that has recently changed by using `lerna changed`.
 * See {@link https://github.com/lerna/lerna/tree/main/commands/changed|@lerna/changed}
 * @return {Promise<string[]>} List of packages that requires to be built.
 */
async function getChangedPackages() {
  try {
    const { stdout } = await execa.command(
      `npx lerna changed --all --include-merged-tags --json --toposort`,
      {
        shell: true,
      },
    );
    return JSON.parse(stdout);
  } catch (error) {
    return [];
  }
}

program
  .action(async () => {
    return getChangedPackages()
      .then((packages) =>
        packages
          .filter(
            ({ location }) =>
              location.includes('/manager/packages/manager/apps') ||
              location.includes('/manager/packages/manager/fragments'),
          )
          .map(({ name }) => name),
      )
      .then((packages) => console.log(packages));
  })
  .parse(process.argv);
