import { handleResult } from "./utils/handleResult.js";

let symbol = process.argv[2];
let quantity = process.argv[3];

console.log(await handleResult(symbol, quantity));
