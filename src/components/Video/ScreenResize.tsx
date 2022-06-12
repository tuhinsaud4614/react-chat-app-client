import * as React from "react";
import { BiExpand, BiExpandAlt } from "react-icons/bi";
import { useTooltip } from "../../hooks";
import VideoContext from "./context";

export default function ScreenResize() {
  const { onHoverEnd, onHoverStart } = useTooltip();

  const { fullScreen, setFullScreen } = React.useContext(VideoContext);

  return (
    <button
      aria-label={true ? "Enter FullScreen" : "Exit FullScreen"}
      type="button"
      className={"h-8 w-8 text-white flex items-center justify-center"}
      onMouseEnter={(e) => {
        onHoverStart(e, {
          text: true ? "Enter FullScreen" : "Exit FullScreen",
          className: "capitalize",
          hideArrow: true,
          anchorOrigin: { horizontal: "center", vertical: "top" },
        });
      }}
      onMouseLeave={() => {
        onHoverEnd();
      }}
      onClick={() => {
        setFullScreen && setFullScreen((prev) => !prev);
      }}
    >
      {fullScreen ? <BiExpandAlt size={24} /> : <BiExpand size={24} />}
    </button>
  );
}

ScreenResize.displayName = "Video.ScreenResize";
