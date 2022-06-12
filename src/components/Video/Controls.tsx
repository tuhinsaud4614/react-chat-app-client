import classNames from "classnames";
import * as React from "react";
import ScreenResize from "./ScreenResize";
import Settings from "./Settings";
import Sounds from "./Sounds";
import Status from "./Status";

const className = {
  root: "absolute bottom-0 left-0 right-0 z-50 px-4 py-2.5",
  bar: "flex items-center",
  rightItem: "pr-1 last:!pr-0",
};

interface Props {
  duration: number;
  videoRef: React.RefObject<HTMLVideoElement>;
}

export default function Controls({ duration, videoRef }: Props) {
  return (
    <section className={classNames(className.root)}>
      <div className={className.bar}>
        <Status duration={duration} videoRef={videoRef} />
        <span className={className.rightItem}>
          <Settings />
        </span>
        <span className={className.rightItem}>
          <ScreenResize />
        </span>
        <span className={className.rightItem}>
          <Sounds videoRef={videoRef} />
        </span>
      </div>
    </section>
  );
}

Controls.displayName = "Video.Controls";
