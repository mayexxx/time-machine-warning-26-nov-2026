import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "Warning: If you return and your dog is the President, please go back and stop stepping on butterflies.");
const content = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (content.length !== 102 || content.includes("\n") || content.includes("\r") || content !== "Warning: If you return and your dog is the President, please go back and stop stepping on butterflies.") {
  throw new Error(`Invalid entry content: ${JSON.stringify(content)}`);
}
