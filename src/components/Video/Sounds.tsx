import * as React from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
}

export default function Sounds({ videoRef }: Props) {
  const [muted, setMuted] = React.useState(false);

  const clickHandler = () => {
    setMuted((prev) => {
      if (videoRef.current) {
        videoRef.current.muted = !prev;
      }

      return !prev;
    });
  };
  return (
    <button
      aria-label={"Sounds"}
      onClick={clickHandler}
      type="button"
      className={"h-8 w-8 text-white flex items-center justify-center"}
      onMouseEnter={(e) => {}}
      onMouseLeave={() => {}}
    >
      {muted ? <GiSpeaker size={24} /> : <GiSpeakerOff />}
    </button>
  );
}

Sounds.displayName = "Video.Sounds";
