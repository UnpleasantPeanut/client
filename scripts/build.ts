interface EnvBuildParams {
    SERVER_URL: string;
}

const OUTPUT = Deno.cwd() + '/public/javascript/build/upc-bundle.js';

const build = async (envBuildParams: EnvBuildParams) => {
    const process = Deno.run({ cmd: [ 
        'deno', 
        'bundle',
        Deno.cwd() + '/lib/mod.ts',
        OUTPUT
    ]});
    await process.status();

    const bundle = await Deno.readTextFile(OUTPUT);

    const parsedBundle = Object.entries(envBuildParams).reduce((acc, [key, value]) => {
        const searchString = `Deno\\.env\\.get\\("${key}"\\)`;
        const regExp = new RegExp(searchString, 'g')
        acc = acc.replace(regExp, `"${value}"`);
        return acc;
    }, bundle);

    await Deno.writeTextFile(OUTPUT, parsedBundle);
}

export default build;