import * as React from "react";
import {
  VideoPlaybackQualityType,
  VideoPlaybackSpeedType,
} from "../../utils/types";

export interface Props {
  fullScreen: boolean;
  videoSrc: string;
  setFullScreen?: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoSrc?: React.Dispatch<React.SetStateAction<string>>;
  setQuality?: React.Dispatch<React.SetStateAction<VideoPlaybackQualityType>>;
  quality: VideoPlaybackQualityType;
  speed: VideoPlaybackSpeedType;
  setSpeed?: React.Dispatch<React.SetStateAction<VideoPlaybackSpeedType>>;
}

export const PLAYBACK_SPEED = [0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2] as const;
export type PLAYBACK_SPEEDType = typeof PLAYBACK_SPEED[number];

const VideoContext = React.createContext<Props>({
  fullScreen: false,
  videoSrc: "",
  quality: "hd",
  speed: 1,
});

export default VideoContext;
