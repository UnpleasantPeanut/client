# unpleasant-peanut-client

## build

```bash
deno bundle lib/mod.ts public/javascript/build/upc-bundle.js
```

## server

```bash
deno run \
    --allow-run \
    --allow-env \
    --allow-read \
    --allow-net \
    --allow-write \
    server/main.ts
```
