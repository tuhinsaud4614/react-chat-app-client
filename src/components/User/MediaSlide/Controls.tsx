import classNames from "classnames";
import * as React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const className = {
  controls: "flex-grow overflow-hidden w-full flex justify-between group",
  control:
    "h-full w-[72px] shrink-0 flex items-center p-4 transform duration-200",
  activeControl:
    "bg-black/5 hover:bg-black/10 relative z-10 hover:-translate-x-1 hover:last:translate-x-1",
  btn: "rounded-full flex items-center justify-center h-10 w-10 bg-white text-neutral-700 hover:bg-zinc-100 active:scale-90",
};

interface Props {
  onAction: (mode: "back" | "forward") => void;
  hideArrow?: "back" | "forward";
  children: React.ReactNode;
}

export default function Controls({ onAction, hideArrow, children }: Props) {
  return (
    <section className={className.controls}>
      <div
        className={classNames(
          className.control,
          hideArrow !== "back" && className.activeControl
        )}
      >
        {hideArrow !== "back" && (
          <button
            aria-label="Previous Photo"
            className={className.btn}
            type="button"
            onClick={() => onAction("back")}
          >
            <BiChevronLeft size={30} />
          </button>
        )}
      </div>
      {children}
      <div
        className={classNames(
          className.control,
          hideArrow !== "forward" && className.activeControl
        )}
      >
        {hideArrow !== "forward" && (
          <button
            aria-label="Next Photo"
            className={className.btn}
            type="button"
            onClick={() => onAction("forward")}
          >
            <BiChevronRight size={30} />
          </button>
        )}
      </div>
    </section>
  );
}

Controls.displayName = "MediaSlide.Controls";
