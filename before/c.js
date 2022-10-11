import "data:text/javascript,console.log('IMPORT c')";
console.log("EXECUTE c");

import { b } from "./b.js";
import { d } from "./d.js";

export const c = b + 100 + d;
