import { drawOracle } from "./engine.js";

const input = process.argv.slice(2).join(" ");

const res = drawOracle(input);

console.log("\n🔮 臥龍一號\n");
console.log("籤號:", res.index);
console.log("籤文:", res.result.verse);
console.log("解釋:", res.result.meaning);

console.log("\n📜 註釋：");
res.note.forEach(n => console.log(" - " + n));
