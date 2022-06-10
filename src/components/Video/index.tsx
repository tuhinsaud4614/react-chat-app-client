import classNames from "classnames";
import * as React from "react";
import { IVideo } from "../../utils/interfaces";
import Controls from "./Controls";

const className = {
  root: "relative",
  video: "object-contain",
};

interface Props
  extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "src"> {
  video: IVideo;
  classes?: {
    root?: string;
  };
}

const Video = ({ video, classes, className: cls, ...rest }: Props) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  return (
    <div className={classNames(classes?.root, className.root)}>
      <video
        {...rest}
        ref={videoRef}
        className={classNames(className.video, cls)}
        src={video.src}
        playsInline
        loop
      />
      <Controls duration={video.duration} videoRef={videoRef} />
    </div>
  );
};

export default Video;
