import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();

const port = +(Deno.env.get('PORT') ?? 3000);

console.log(Deno.cwd());

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