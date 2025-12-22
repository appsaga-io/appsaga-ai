const fs = require("fs");
const path = require("path");

function rmSafe(targetPath) {
  try {
    fs.rmSync(targetPath, { recursive: true, force: true });
    return true;
  } catch (err) {
    return false;
  }
}

const projectRoot = path.resolve(__dirname, "..");
const nextDir = path.join(projectRoot, ".next");

const removed = rmSafe(nextDir);
process.stdout.write(removed ? "Removed .next\n" : "No .next to remove (or failed)\n");



