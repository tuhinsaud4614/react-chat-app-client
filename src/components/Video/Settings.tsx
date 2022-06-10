import { BiCog } from "react-icons/bi";
import { useTooltip } from "../../hooks";

interface Props {}

export default function Settings() {
  const { onHoverEnd, onHoverStart } = useTooltip();
  return (
    <button
      aria-label="Settings"
      onClick={() => {}}
      type="button"
      className={"h-8 w-8 text-white flex items-center justify-center"}
      onMouseEnter={(e) => {
        onHoverStart(e, {
          text: "Settings",
          className: "capitalize",
          hideArrow: true,
          anchorOrigin: { horizontal: "center", vertical: "top" },
        });
      }}
      onMouseLeave={() => {
        onHoverEnd();
      }}
    >
      <BiCog size={24} />
    </button>
  );
}

Settings.displayName = "Video.Settings";
