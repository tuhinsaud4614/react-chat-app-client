import { BiExpandAlt } from "react-icons/bi";
import { useTooltip } from "../../hooks";

export default function ScreenResize() {
  const { onHoverEnd, onHoverStart } = useTooltip();

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
    >
      <BiExpandAlt size={24} />
    </button>
    // <ControlButton aria-label={"ScreenResize"}>
    //   <BiExpandAlt size={24} />
    // </ControlButton>
  );
}

ScreenResize.displayName = "Video.ScreenResize";
