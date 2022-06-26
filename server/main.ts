import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import build from "../scripts/build.ts";

await build({
  input: Deno.cwd() + "/lib/mod.ts",
  output: Deno.cwd() + "/public/javascript/build/upc-bundle.js",
  env: {
    SERVER_URL: Deno.env.get("SERVER_URL") ?? "ws://127.0.0.1:3012",
  }
});

const app = new Application();
const port = +(Deno.env.get("PORT") ?? 3000);

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/public`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});

app.listen({ port });
