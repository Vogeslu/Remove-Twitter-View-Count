if (process.argv.length < 3) return;

const fs = require("fs");

const target = process.argv[2];
const allowedTargets = ["chrome", "firefox"];

if (!allowedTargets.includes(target))
  throw new Error(`Invalid target: ${target}`);

if (fs.existsSync(`dist/${target}`))
  fs.rmSync(`dist/${target}`, { recursive: true });

fs.mkdirSync(`dist/${target}`, { recursive: true });
fs.mkdirSync(`dist/${target}/img`, { recursive: true });

fs.copyFileSync("src/main.js", `dist/${target}/main.js`);
fs.copyFileSync(`src/manifest-${target}.json`, `dist/${target}/manifest.json`);

fs.readdirSync("src/img").forEach((file) => {
  fs.copyFileSync(`src/img/${file}`, `dist/${target}/img/${file}`);
});
