import * as React from "react";
import { BiCog } from "react-icons/bi";
import { useOnClickOutside, useTooltip } from "../../hooks";
import SettingsItems from "./SettingsItems";

const className = {
  root: "relative h-8 w-8",
  btn: "h-8 w-8 text-white flex items-center justify-center",
};

export default function Settings() {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);

  const { onHoverEnd, onHoverStart } = useTooltip();

  useOnClickOutside(rootRef, () => {
    setOpen(false);
  });

  return (
    <div ref={rootRef} className={className.root}>
      {open && <SettingsItems />}
      <button
        aria-label="Settings"
        onClick={(event) => {
          setOpen(true);
        }}
        type="button"
        className={className.btn}
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
    </div>
  );
}

Settings.displayName = "Video.Settings";
