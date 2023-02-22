import { formatResult } from "./utils/formatResult.js";

let symbol = process.argv[2];
let quantity = process.argv[3];

console.log(await formatResult(symbol, quantity));
