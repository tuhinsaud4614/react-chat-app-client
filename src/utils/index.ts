import lodash from "lodash";
import * as React from "react";
import { IAnchorOrigin, IUser } from "./interfaces";

const ARROW_SIZE = 14;
export const getPositions = (
  anchorRect: DOMRect | null,
  selfRect: DOMRect | null,
  anchorOrigin: IAnchorOrigin,
  fraction?: boolean | number,
  hideArrow?: boolean
) => {
  let selfLeft = 0;
  let selfTop = 0;
  let arrowLeft = 0;
  let arrowTop = 0;
  let FRACTION = 1;

  if (anchorOrigin.horizontal === "right" && fraction) {
    FRACTION = typeof fraction === "boolean" ? 0.89 : fraction;
  } else if (anchorOrigin.horizontal === "left" && fraction) {
    FRACTION = typeof fraction === "boolean" ? 0.11 : fraction;
  }

  if (anchorRect) {
    const selfWidth = selfRect ? selfRect.width : 0;
    const selfHeight = selfRect ? selfRect.height : 0;
    selfLeft = anchorRect.left - selfWidth * FRACTION;
    selfTop = hideArrow
      ? anchorRect.bottom + 4
      : anchorRect.bottom + ARROW_SIZE;

    arrowLeft = anchorRect.left + (anchorRect.width / 2 - ARROW_SIZE / 2);
    arrowTop = anchorRect.bottom + ARROW_SIZE / 2;

    if (anchorOrigin.horizontal === "center") {
      selfLeft = anchorRect.left - (selfWidth - anchorRect.width) / 2;
    } else if (anchorOrigin.horizontal === "right") {
      selfLeft = anchorRect.right - selfWidth * FRACTION;
    }

    if (anchorOrigin.vertical === "top") {
      selfTop = anchorRect.top - selfHeight - (hideArrow ? 4 : ARROW_SIZE);
      arrowTop = anchorRect.top - ARROW_SIZE * 1.5;
    }
  }

  return {
    selfLeft,
    selfTop,
    arrowLeft,
    arrowTop,
  };
};

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

export function getUserName(
  user: Pick<IUser, "email" | "firstName" | "lastName">
) {
  return user.firstName || user.lastName
    ? `${user.firstName} ${user.lastName}`.trim()
    : user.email.split("@")[0];
}

export const removeAllSpacesFromText = (value: string) =>
  value.replace(/\s+/g, "");

export const splitClassName = (className?: string) => {
  return className?.replace(/\s+/g, " ").trim().split(" ");
};

export function getReadableFileSizeString(fileSizeInBytes: number) {
  var i = -1;
  var byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
  do {
    fileSizeInBytes = fileSizeInBytes / 1024;
    i++;
  } while (fileSizeInBytes > 1024);

  return `${Math.max(fileSizeInBytes, 0.1).toFixed(1)} ${byteUnits[i]}`;
}
