import crypto from "crypto";
import data from "./data/oracle.json" assert { type: "json" };

function pseudoRandom(seed) {
  const hash = crypto
    .createHash("sha256")
    .update(String(seed))
    .digest("hex");

  return parseInt(hash.slice(0, 8), 16);
}

export function drawOracle(userInput) {
  const seed = userInput + Date.now(); // ✔ 永遠變動
  const num = pseudoRandom(seed);
  const index = num % 384;

  return {
    index: index + 1,
    result: data[index],
    note: [
      "心誠則靈，相只有一次，就是第一次",
      "同一件事同一天內不要問兩次",
      "如果不信占卜，那只是隨機一直測到你想要的答案而已",
      "諸葛神籤不是用來重複測試的系統"
    ]
  };
}
