import lodash from "lodash";
import * as React from "react";

export function instanceOf<T>(obj: any, checkerKey: keyof T): obj is T {
  return checkerKey in obj;
}

export function splitJSXChild(
  child: any,
  checker: string | React.JSXElementConstructor<any>
): any {
  return React.isValidElement(child) && child.type === checker && child;
}

export function randomStringGenerate(
  length: number = 6,
  strCase: "upper" | "lower" | "capitalize" = "lower"
) {
  let result: string = "";
  switch (strCase) {
    case "upper":
      for (let index = 0; index < length; index++) {
        result += String.fromCharCode(lodash.random(65, 90));
      }
      return result;
    case "capitalize":
      for (let index = 0; index < length; index++) {
        result += String.fromCharCode(
          lodash.random(index === 0 ? 65 : 97, index === 0 ? 90 : 122)
        );
      }
      return result;

    default:
      for (let index = 0; index < length; index++) {
        result += String.fromCharCode(lodash.random(97, 122));
      }
      return result;
  }
}
