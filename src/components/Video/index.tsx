import classNames from "classnames";
import * as React from "react";
import { IVideo } from "../../utils/interfaces";
import {
  VideoPlaybackQualityType,
  VideoPlaybackSpeedType,
} from "../../utils/types";
import VideoContext from "./context";
import Controls from "./Controls";

const className = {
  root: "relative",
  rootFull:
    "object-contain !fixed inset-0 !min-w-0 !max-w-screen !min-h-0 !max-h-screen z-50 bg-black",
  video: "object-contain mx-auto",
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
  const [videoSrc, setVideoSrc] = React.useState(video.src);
  const [quality, setQuality] = React.useState<VideoPlaybackQualityType>("hd");
  const [speed, setSpeed] = React.useState<VideoPlaybackSpeedType>(1);
  const [fullScreen, setFullScreen] = React.useState(false);

  React.useEffect(() => {
    const videoEle = videoRef.current;
    if (videoEle) {
      videoEle.playbackRate = speed;
    }
  }, [speed]);

  return (
    <VideoContext.Provider
      value={{
        fullScreen,
        setFullScreen,
        videoSrc,
        setVideoSrc,
        quality,
        setQuality,
        speed,
        setSpeed,
      }}
    >
      <div
        className={classNames(
          fullScreen && className.rootFull,
          classes?.root,
          className.root
        )}
      >
        <video
          {...rest}
          ref={videoRef}
          className={classNames(
            className.video,
            fullScreen && "!max-h-screen",
            cls
          )}
          src={quality === "hd" ? video.src : video.sdSrc}
          playsInline
          loop
        />
        <Controls duration={video.duration} videoRef={videoRef} />
      </div>
    </VideoContext.Provider>
  );
};

export default Video;
