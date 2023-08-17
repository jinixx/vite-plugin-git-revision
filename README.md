# @jinixx/vite-plugin-git-revision

[![npm version](https://badgen.net/npm/v/@jinixx/vite-plugin-git-revision)](https://www.npmjs.com/package/@jinixx/vite-plugin-git-revision)
[![monthly downloads](https://badgen.net/npm/dm/@jinixx/vite-plugin-git-revision)](https://www.npmjs.com/package/@jinixx/vite-plugin-git-revision)

> Git version info for applications using [Vite](https://github.com/vitejs/vite)
>
> Forked from https://github.com/qduld/vite-plugin-git-revision to fix a few issues.

## Getting Started

Install:

```bash
npm install -D @jinixx/vite-plugin-git-revision
```

Add to your `vite.config.js`:

```js
import GitRevision from 'vite-plugin-git-revision';

export default {
  plugins: [
    GitRevision()
  ],
};
```

## Configuration

To use custom configuration, pass your options to Pages when instantiating the plugin:

```js
// vite.config.js
import GitRevision from 'vite-plugin-git-revision';

export default {
  plugins: [
    GitRevision({
      lightweightTags: false,
      branch: false,
      // default versionCommand was `describe --always`
      versionCommand: 'describe --tags --long --dirty --always',
      // default, remove prop if not needed, do not set to empty
      commithashCommand: 'rev-parse HEAD',
      // default, remove prop if not needed, do not set to empty
      branchCommand: 'rev-parse --abbrev-ref HEAD'
    }),
  ],
};
```

### lightweightTags

- **Type:** `boolean`
- **Default:** `false`

lightweight tags support.

### branch

- **Type:** `boolean`
- **Default:** `false`

branch tags support.

### versionCommand

- **Type:** `string`
- **Default:** `describe --always`

change the default git command used to read the value of VERSION.

### commithashCommand

- **Type:** `string`
- **Default:** `rev-parse HEAD`

change the default git command used to read the value of COMMITHASH.

### branchCommand

- **Type:** `string`
- **Default:** `rev-parse --abbrev-ref HEAD`

change the default git command used to read the value of BRANCH.

## License

MIT
