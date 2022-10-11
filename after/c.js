import "data:text/javascript,console.log('IMPORT c')";
console.log("EXECUTE c");

import { b, d } from "./a.js";

export const c = b + 100 + d;
