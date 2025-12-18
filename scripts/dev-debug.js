const path = require("path");
const { spawn } = require("child_process");

// A stable way to run Next in debug mode:
// - deletes .next (avoid corrupted chunks like vendor-chunks/next.js)
// - disables webpack persistent cache for this run
// - enables Node inspector

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: "inherit", ...opts });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(" ")} exited with code ${code}`));
    });
    child.on("error", reject);
  });
}

async function main() {
  const projectRoot = path.resolve(__dirname, "..");

  // Clean .next first
  await run(process.execPath, [path.join(projectRoot, "scripts", "clean-next.js")], {
    cwd: projectRoot,
  });

  // Resolve local next binary
  const nextBin = path.join(
    projectRoot,
    "node_modules",
    ".bin",
    process.platform === "win32" ? "next.cmd" : "next"
  );

  const existingNodeOptions = process.env.NODE_OPTIONS || "";
  // VS Code "JavaScript Debug Terminal" often injects its own NODE_OPTIONS already
  // (including inspector/bootstrap flags). Only add --inspect if it's not present.
  const needsInspect = !/\s--inspect(-brk)?(\s|=|$)/.test(existingNodeOptions);
  const nodeOptions = needsInspect ? `${existingNodeOptions} --inspect`.trim() : existingNodeOptions;

  const env = {
    ...process.env,
    NODE_OPTIONS: nodeOptions,
    NEXT_DISABLE_WEBPACK_CACHE: "1",
  };

  await run(nextBin, ["dev"], { cwd: projectRoot, env });
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});


