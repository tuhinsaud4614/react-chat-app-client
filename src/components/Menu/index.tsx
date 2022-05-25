import classNames from "classnames";
import * as React from "react";
import { IAnchorOrigin } from "../../utils/interfaces";
import Portal from "../Portal";
const ARROW_SIZE = 14;

const getPositions = (
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
  let FRACTION = 0;

  if (anchorOrigin.horizontal === "right" && typeof fraction !== "undefined") {
    FRACTION = typeof fraction === "boolean" ? 0.89 : fraction;
  } else if (
    anchorOrigin.horizontal === "left" &&
    typeof fraction !== "undefined"
  ) {
    FRACTION = typeof fraction === "boolean" ? 0.11 : fraction;
  }

  if (anchorRect) {
    const selfWidth = selfRect ? selfRect.width : 0;
    const selfHeight = selfRect ? selfRect.height : 0;
    selfLeft = anchorRect.left - selfWidth * FRACTION;
    selfTop = hideArrow ? anchorRect.bottom : anchorRect.bottom + ARROW_SIZE;

    arrowLeft = anchorRect.left + (anchorRect.width / 2 - ARROW_SIZE / 2);
    arrowTop = anchorRect.bottom + ARROW_SIZE / 2;

    if (anchorOrigin.horizontal === "center") {
      selfLeft = anchorRect.left - (selfWidth - anchorRect.width) / 2;
    } else if (anchorOrigin.horizontal === "right") {
      selfLeft = anchorRect.right - selfWidth * FRACTION;
    }

    if (anchorOrigin.vertical === "top") {
      selfTop = anchorRect.top - selfHeight - (hideArrow ? 0 : ARROW_SIZE);
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

interface Props {
  open: boolean;
  anchorEle?: null | Element;
  children?: React.ReactNode;
  onClose?(): void;
  anchorOrigin?: IAnchorOrigin;
  hideArrow?: boolean;
  fraction?: boolean | number;
  classes?: {
    backdrop?: string;
    root?: string;
    arrow?: string;
    container?: string;
  };
}

const MenuComponent = ({
  open = false,
  anchorEle,
  onClose,
  anchorOrigin = { horizontal: "right", vertical: "bottom" },
  hideArrow = false,
  classes,
  fraction,
  children,
}: Props) => {
  const [anchorRect, setAnchorRect] = React.useState<DOMRect | null>(null);
  const [selfRect, setSelfRect] = React.useState<DOMRect | null>(null);
  const ref = React.useRef<HTMLElement>(null);

  React.useLayoutEffect(() => {
    const handler = () => {
      if (anchorEle) {
        setAnchorRect(anchorEle.getBoundingClientRect());
      }
    };

    handler();
    window.addEventListener("resize", handler);
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("scroll", handler);
    };
  }, [anchorEle]);

  React.useEffect(() => {
    if (open && ref.current) {
      setSelfRect(ref.current.getBoundingClientRect());
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const { arrowLeft, arrowTop, selfLeft, selfTop } = getPositions(
    anchorRect,
    selfRect,
    anchorOrigin,
    fraction,
    hideArrow
  );

  return (
    <Portal>
      {!!onClose && (
        <div
          onClick={onClose}
          className={classNames("fixed z-[900] inset-0", classes?.backdrop)}
        />
      )}
      <section
        ref={ref}
        className={classNames(
          "fixed z-[910] bg-white shadow-mine-2 rounded-md",
          classes?.root
        )}
        style={{
          left: selfLeft,
          top: selfTop,
        }}
      >
        {!hideArrow && (
          <span
            className={classNames(
              "fixed block bg-white transform rotate-45 shadow-mine-2 w-3.5 h-3.5",
              classes?.arrow
            )}
            style={{
              left: arrowLeft,
              top: arrowTop,
            }}
          />
        )}
        <div
          className={classNames(
            "relative z-10 w-full h-full bg-white rounded-md overflow-hidden",
            classes?.container
          )}
        >
          {children}
        </div>
      </section>
    </Portal>
  );
};
const Menu = React.memo(MenuComponent, (prev, next) => prev.open === next.open);
export default Menu;
