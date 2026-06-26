import { drawOracle } from "./engine.js";

const input = process.argv.slice(2).join(" ");

const result = drawOracle(input);

console.log("\n🔮 臥龍一號結果\n");
console.log("籤號:", result.index);
console.log("籤文:", result.result.verse);
console.log("解釋:", result.result.meaning);
