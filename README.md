# unpleasant-peanut-client

## build

```bash
SERVER_URL=ws://127.0.0.1:3012 deno bundle lib/mod.ts public/javascript/build/upc-bundle.js
```

## server

```bash
deno run --allow-env --allow-read --allow-net server/main.ts
```
