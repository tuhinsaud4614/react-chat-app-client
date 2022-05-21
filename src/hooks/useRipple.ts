import { nanoid } from "nanoid";
import * as React from "react";

interface Props {
  rippleColor?: string;
  className?: string;
}

export default function useRipple(props?: Props) {
  const rippleId = `ripple-${nanoid(4)}`;
  const mouseEventHandler = <T extends HTMLElement>(e: React.MouseEvent<T>) => {
    const currEle = e.currentTarget;
    currEle.style.position = "relative";
    currEle.style.overflow = "hidden";

    const { x, y, width, height } = currEle.getBoundingClientRect();

    const diameter = Math.max(width, height);
    const radius = diameter / 2;

    // circle style
    const circle = document.createElement("span");
    circle.dataset.id = rippleId;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.left = `${e.clientX - x - radius}px`;
    circle.style.top = `${e.clientY - y - radius}px`;
    circle.style.transform = `scale(0)`;
    if (props?.rippleColor) {
      circle.style.backgroundColor = props.rippleColor;
    } else {
      circle.classList.add("bg-white/50");
    }

    circle.classList.add("animate-ripple");
    if (props?.className) {
      const clsLi = props?.className?.replace(/\s+/g, " ").trim().split(" ");

      circle.classList.add(...clsLi);
    }

    const ripple = currEle.querySelector(`[data-id=${rippleId}]`);

    if (ripple) {
      ripple.remove();
    }
    currEle.prepend(circle);
  };

  return {
    mouseEvent: mouseEventHandler,
  } as const;
}
