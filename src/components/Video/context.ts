import * as React from "react";

export interface Props {
  fullScreen: boolean;
  videoSrc: string;
  setFullScreen?: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoSrc?: React.Dispatch<React.SetStateAction<string>>;
}

const VideoContext = React.createContext<Props>({
  fullScreen: false,
  videoSrc: "",
});

export default VideoContext;
