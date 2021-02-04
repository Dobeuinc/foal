---
title: Root Imports
---

> You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available [here](../upgrade-to-v2/README.md). The old documentation can be found [here](https://github.com/FoalTS/foal/tree/v1.x/docs).

```typescript
// Relative import
import { User } from '../../entities';

// Root import
import { User } from 'app/entities';
```

FoalTS build does not resolve root imports by default. You must install the [module-alias](https://www.npmjs.com/package/module-alias) package if you want to use them. Here's how to configure the library with Foal:

```
npm install module-alias
```

Specify the directory from which root imports should be resolved during compilation.

*tsconfig.json*
```json
{
  "compilerOptions": {
    "baseUrl": "src",
    ...
  }
}
```

Specify the directory from which root imports should be resolved at runtime.

*package.json*
```json
{
  ...
   "_moduleDirectories": ["./build"]
}
```

Then register the loader at the top of the file `src/index.ts`.

*src/index.ts*
```typescript
import 'module-alias/register';

// ...
```

If you use shell scripts, the loader must also be registered at the top of each one.

*src/scripts/create-user.ts (example)*
```typescript
import 'module-alias/register';

// ...
```