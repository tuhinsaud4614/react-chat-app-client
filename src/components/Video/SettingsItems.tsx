import classNames from "classnames";
import * as React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useRipple } from "../../hooks";
import {
  VideoPlaybackQualityType,
  VideoPlaybackSpeedType,
} from "../../utils/types";
import ListTile from "../ListTile";
import VideoContext from "./context";
import SettingsItem from "./SettingsItem";

const className = {
  container:
    "absolute bottom-full w-max right-0 bg-white rounded-md shadow-mine-2",
  content: "flex flex-col list-none m-0",
  item: "hover:bg-secondary/10 active:bg-secondary/30 px-2.5 py-1",
  itemTailing: "flex items-center ml-4 text-neutral-700",
  optionItem: "flex items-center p-1",
  optionItemText: "ml-2",
};

const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2];

export default function SettingsItems() {
  const { quality, speed, setQuality, setSpeed } =
    React.useContext(VideoContext);
  const [option, setOption] = React.useState<"quality" | "speed" | null>(null);
  const [hide, setHide] = React.useState<boolean>(false);
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });

  const qualityChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuality && setQuality(event.target.value as VideoPlaybackQualityType);
  };

  const speedChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    if (!isNaN(value)) {
      setSpeed && setSpeed(value as VideoPlaybackSpeedType);
    }
  };

  return (
    <React.Fragment>
      <section className={classNames(className.container, hide && "hidden")}>
        <ul className={className.content}>
          <ListTile
            as="li"
            role="button"
            aria-label="Quality"
            className={className.item}
            onClick={() => {
              setHide(true);
              setOption("quality");
            }}
          >
            <ListTile.Title>Quality</ListTile.Title>
            <ListTile.Tailing className={className.itemTailing}>
              <span>{quality}</span>
              <BiChevronRight size={20} />
            </ListTile.Tailing>
          </ListTile>
          <ListTile
            as="li"
            role="button"
            aria-label="Playback Speed"
            className={className.item}
            onClick={() => {
              setHide(true);
              setOption("speed");
            }}
          >
            <ListTile.Title>Playback Speed</ListTile.Title>
            <ListTile.Tailing className={className.itemTailing}>
              <span>{speed}</span>
              <BiChevronRight size={20} />
            </ListTile.Tailing>
          </ListTile>
        </ul>
      </section>
      {option === "quality" && (
        <SettingsItem
          backBtnProps={{
            "aria-label": "Close Quality",
            children: "Quality",
            onClick() {
              setHide(false);
              setOption(null);
            },
          }}
        >
          <label
            className={className.optionItem}
            onClick={(e) => mouseEvent(e)}
          >
            <input
              name="quality"
              type="radio"
              value="hd"
              onChange={qualityChangeHandler}
              checked={quality === "hd"}
            />
            <span className={className.optionItemText}>hd</span>
          </label>
          <label
            className={className.optionItem}
            onClick={(e) => mouseEvent(e)}
          >
            <input
              name="quality"
              type="radio"
              value="sd"
              onChange={qualityChangeHandler}
              checked={quality === "sd"}
            />
            <span className={className.optionItemText}>sd</span>
          </label>
        </SettingsItem>
      )}
      {option === "speed" && (
        <SettingsItem
          backBtnProps={{
            "aria-label": "Close Playback Speed",
            children: "Playback Speed",
            onClick() {
              setHide(false);
              setOption(null);
            },
          }}
        >
          {speeds.map((value) => (
            <label
              key={value}
              className={className.optionItem}
              onClick={(e) => mouseEvent(e)}
            >
              <input
                name="speed"
                type="radio"
                value={value}
                onChange={speedChangeHandler}
                checked={speed === value}
              />
              <span className={className.optionItemText}>{value}</span>
            </label>
          ))}
        </SettingsItem>
      )}
    </React.Fragment>
  );
}

SettingsItems.displayName = "Video.Settings.Items";
