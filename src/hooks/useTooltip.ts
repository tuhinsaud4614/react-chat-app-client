import React from "react";
import { getPositions, splitClassName } from "../utils";
import { IAnchorOrigin } from "../utils/interfaces";

interface Props {
  anchorOrigin?: IAnchorOrigin;
  hideArrow?: boolean;
  className?: string;
  text: React.ReactNode;
}

export default function useTooltip() {
  const tooltipEle = React.useRef<HTMLSpanElement | null>(null);
  const arrowEle = React.useRef<HTMLSpanElement | null>(null);

  const clearHandler = () => {
    if (tooltipEle.current) {
      if (arrowEle.current) {
        arrowEle.current.remove();
        arrowEle.current = null;
      }
      tooltipEle.current.remove();
      tooltipEle.current = null;
    }
  };

  const onHoverStart = <T extends HTMLElement>(
    e: React.MouseEvent<T>,
    {
      text,
      anchorOrigin = { horizontal: "center", vertical: "bottom" },
      hideArrow = false,
      className,
    }: Props
  ) => {
    if (!tooltipEle.current) {
      tooltipEle.current = document.createElement("span");
      tooltipEle.current.innerHTML = `${text}`;
      tooltipEle.current.ariaLabel = `Tooltip ${text}`;
      tooltipEle.current.className =
        "fixed select-none z-[999] w-auto px-1.5 py-1 min-w-max rounded-md shadow-md text-white bg-gray-900 text-xs font-bold";
    }

    const presentational = document.getElementById("tooltip");
    if (presentational) {
      presentational.appendChild(tooltipEle.current);
    } else {
      document.body.appendChild(tooltipEle.current);
    }

    const currEle = e.currentTarget;
    const { arrowLeft, arrowTop, selfLeft, selfTop } = getPositions(
      currEle.getBoundingClientRect(),
      tooltipEle.current.getBoundingClientRect(),
      anchorOrigin,
      false,
      hideArrow
    );

    tooltipEle.current.style.left = `${selfLeft}px`;
    tooltipEle.current.style.top = `${selfTop}px`;
    if (!arrowEle.current && !hideArrow) {
      arrowEle.current = document.createElement("span");
      arrowEle.current.ariaLabel = `Tooltip arrow ${text}`;
      arrowEle.current.className =
        "fixed block bg-gray-900 transform rotate-45 shadow-md w-3.5 h-3.5";
      tooltipEle.current.appendChild(arrowEle.current);
      arrowEle.current.style.left = `${arrowLeft}px`;
      arrowEle.current.style.top = `${arrowTop}px`;
    }
    tooltipEle.current.classList.add("animate-tooltip");
    arrowEle.current?.classList.add("animate-tooltip");

    // Add extra class name
    const extraCls = splitClassName(className);
    if (extraCls && extraCls.length) {
      tooltipEle.current.classList.add(...extraCls);
    }
  };

  const onHoverEnd = () => {
    clearHandler();
  };

  React.useEffect(() => {
    return clearHandler;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tooltipEle.current, arrowEle.current]);

  return { onHoverStart, onHoverEnd } as const;
}
