WorkerTest
===

```bash
git clone https://github.com/danielesteban/exokitworkertest.git
cd exokitworkertest
yarn install
yarn start
```

```
$ ../node/node.exe --experimental-worker ../src/index.js -x webvr http://localhost:8080/
Main thread ready
Worker ready
Received from worker
```

It doesn't seem to receive messages from the main thread on the worker side.
