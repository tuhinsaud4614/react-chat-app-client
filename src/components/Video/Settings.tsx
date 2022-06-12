import * as React from "react";
import { BiChevronLeft, BiChevronRight, BiCog } from "react-icons/bi";
import { useTooltip } from "../../hooks";
import ListTile from "../ListTile";
import Menu from "../Menu";

const className = {
  btn: "h-8 w-8 text-white flex items-center justify-center",
  container: "relative",
  content: "flex flex-col list-none m-0",
  item: "hover:bg-secondary/10 active:bg-secondary/30 px-2.5 py-1",
  itemTailing: "flex items-center ml-4 text-neutral-700",
};

interface Props {}

export default function Settings() {
  const [anchorEle, setAnchorEle] = React.useState<null | HTMLButtonElement>(
    null
  );
  const [option, setOption] = React.useState<"quality" | "speed" | null>(null);

  const { onHoverEnd, onHoverStart } = useTooltip();

  console.log(option);

  return (
    <React.Fragment>
      <Menu
        open={Boolean(anchorEle)}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        anchorEle={anchorEle}
        hideArrow
        onClose={() => {
          setOption(null);
          setAnchorEle(null);
        }}
        classes={{ container: "!overflow-initial" }}
      >
        <section className={className.container}>
          <ul className={className.content}>
            <ListTile
              as="li"
              role="button"
              aria-label="Quality"
              className={className.item}
              onClick={() => {
                setOption("quality");
              }}
            >
              <ListTile.Title>Quality</ListTile.Title>
              <ListTile.Tailing className={className.itemTailing}>
                <span>hd</span>
                <BiChevronRight size={20} />
              </ListTile.Tailing>
            </ListTile>
            <ListTile
              as="li"
              role="button"
              aria-label="Playback Speed"
              className={className.item}
              onClick={() => {
                setOption("speed");
              }}
            >
              <ListTile.Title>Playback Speed</ListTile.Title>
              <ListTile.Tailing className={className.itemTailing}>
                <span>1</span>
                <BiChevronRight size={20} />
              </ListTile.Tailing>
            </ListTile>
          </ul>
          {option === "quality" && (
            <div className="rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 w-full -translate-y-1/2 bg-white text-neutral-700 flex flex-col">
              <button
                type="button"
                aria-label="Close Quality"
                onClick={() => setOption(null)}
                className="flex items-center px-2.5 py-1"
              >
                <BiChevronLeft size={20} />
                <span>Quality</span>
              </button>
              <div className="list-none m-0 flex flex-col">
                <label>
                  <input name="quality" type="radio" value="hd" />
                  hd
                </label>
                <label>
                  <input name="quality" type="radio" value="sd" />
                  sd
                </label>
              </div>
            </div>
          )}
          {option === "speed" && (
            <div className="rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 w-full -translate-y-1/2 bg-white text-neutral-700 flex flex-col">
              <button
                type="button"
                aria-label="Close Playback Speed"
                onClick={() => setOption(null)}
                className="flex items-center px-2.5 py-1"
              >
                <BiChevronLeft size={20} />
                <span>Playback Speed</span>
              </button>
              <div className="list-none m-0 flex flex-col">
                <label>
                  <input name="quality" type="radio" value="hd" />1
                </label>
                <label>
                  <input name="quality" type="radio" value="sd" />2
                </label>
              </div>
            </div>
          )}
        </section>
      </Menu>
      <button
        aria-label="Settings"
        onClick={(event) => {
          setAnchorEle(event.currentTarget);
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
    </React.Fragment>
  );
}

Settings.displayName = "Video.Settings";
