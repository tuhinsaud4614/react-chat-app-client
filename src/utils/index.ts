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
