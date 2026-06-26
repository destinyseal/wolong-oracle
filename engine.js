import crypto from "crypto";
import data from "./data/oracle.json" assert { type: "json" };

function pseudoRandom(seed) {
  const hash = crypto
    .createHash("sha256")
    .update(String(seed))
    .digest("hex");

  // 取前 8 位轉數字
  return parseInt(hash.slice(0, 8), 16);
}

export function drawOracle(userInput) {
  const seed = userInput + Date.now(); // ✔ 你的規則
  const num = pseudoRandom(seed);
  const index = (num % 384);

  return {
    index: index + 1,
    result: data[index]
  };
}
