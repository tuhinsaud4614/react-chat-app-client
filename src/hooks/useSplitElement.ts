import * as React from "react";
import { splitJSXChild } from "../utils";

export default function useSplitElement<
  T extends { [key: string]: React.JSXElementConstructor<any> }
>(children: React.ReactNode, checkers: T) {
  const result = React.useMemo(() => {
    const components: { [P in keyof T]: any } = {} as { [P in keyof T]: any };
    const restComponents: React.ReactNode[] = [];

    React.Children.toArray(children).forEach((child) => {
      let flag = false;
      for (const key in checkers) {
        const item = splitJSXChild(child, checkers[key]);
        if (item) {
          components[key] = item;
          flag = true;
          break;
        }
      }
      if (!flag) {
        restComponents.push(child);
      }
    });
    return { ...components, restComponents: [...restComponents] } as const;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  return result;
}
