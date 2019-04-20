WorkerTest
===

```bash
git clone https://github.com/danielesteban/exokitworkertest.git
cd exokitworkertest
yarn install
yarn start
exokit http://localhost:8080/
```

```
TypeError: process.chdir is not a function
    at C:\exokit\src\native-bindings.js:6:11
    at Object.<anonymous> (C:\exokit\src\native-bindings.js:10:3)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Module.require (internal/modules/cjs/loader.js:657:17)
    at require (internal/modules/cjs/helpers.js:22:18)
    at Object.<anonymous> (C:\exokit\src\DOM.js:14:18)
Bugsnag:  Encountered an uncaught error, terminating…
```
