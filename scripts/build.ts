interface BuildParams {
  input: string;
  output: string;
  env: Record<string, string>;
}

const build = async ({ input, output, env }: BuildParams) => {
  const process = Deno.run({
    cmd: [
      "deno",
      "bundle",
      input,
      output,
    ],
  });
  await process.status();

  const bundle = await Deno.readTextFile(output);

  const parsedBundle = Object.entries(env).reduce(
    (acc, [key, value]) => {
      const searchString = `Deno\\.env\\.get\\("${key}"\\)`;
      const regExp = new RegExp(searchString, "g");
      acc = acc.replace(regExp, `"${value}"`);
      return acc;
    },
    bundle,
  );

  await Deno.writeTextFile(output, parsedBundle);
};

export default build;
