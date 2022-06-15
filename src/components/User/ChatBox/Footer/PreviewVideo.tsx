import * as React from "react";
import { BiPlayCircle } from "react-icons/bi";

const className = {
  root: "h-12 w-12 rounded-[0.625rem] inline-block overflow-hidden relative bg-gray-200",
  video: "h-12 w-12 object-cover",
  play: "absolute inset-0 flex items-center justify-center z-10 text-white bg-black/20",
};

export default function PreviewVideo({
  src,
  ...rest
}: React.VideoHTMLAttributes<HTMLVideoElement>) {
  return (
    <span className={className.root}>
      <video {...rest} src={src} className={className.video} />
      <span className={className.play}>
        <BiPlayCircle size={24} />
      </span>
    </span>
  );
}

PreviewVideo.displayName = "ChatBox.Preview.Video";
