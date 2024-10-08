# vite-workspace-experiment

Experimenting with creating a web UI using Vite, workspaces, and React.

## Getting started

1. Install pnpm. The node.js "corepack" system may be viable, or you can just use `npm install -g pnpm`
2. Install dependencies from the root directory by running `pnpm install`
3. Start the app from the root directory by running `pnpm start`
   - Changes to any code in either `app` or `shared` should be hot-reloaded
4. Run all tests from the root directory by running `pnpm test`

# TODO

- [x] Get list of VS Code extensions and settings
- [x] Set up library (tsc only) and app (Vite)
- [x] Set up tests for both library and app (vitest, testing-library)
- [x] Add axe accessibility scans for UI components
- [x] Set up Prettier, ESLint, Stylelint, Syncpack
  - Could do them in Vite: https://bitbucket.org/unimorphic/vite-plugin-linter/src/master/
  - Another option: https://github.com/fi3ework/vite-plugin-checker
- [x] Set up automated pipeline that builds, runs linting, etc.
  - Just detect and error on findings
- [x] Can we push most/all deps up to root package.json so they're consistent across the repo?
  - No, but see https://github.com/JamieMason/syncpack which also has more linting
- [x] Get rid of intermediate "packages" directory
- [x] Referencing shared library source directly is probably "wrong" but very convenient--is there a "right" way that can be made convenient?

# Reference links

- https://pnpm.io/workspaces
- https://github.com/vitejs/vite
- https://vitejs.dev/guide/
- https://vitest.dev/guide/
- https://cathalmacdonnacha.com/migrating-from-create-react-app-cra-to-vite
- https://cathalmacdonnacha.com/setting-up-eslint-prettier-in-vitejs
- https://cathalmacdonnacha.com/migrating-from-jest-to-vitest
- https://github.com/vitejs/awesome-vite
