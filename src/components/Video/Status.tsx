import * as React from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { useTooltip } from "../../hooks";
import Slider from "../Slider";
import Timer from "./Timer";

const className = {
  root: "flex-grow flex items-center px-1",
  ranger: "basis-full bg-red-200 h-3",
};

interface Props {
  duration: number;
  videoRef: React.RefObject<HTMLVideoElement>;
}

export default function Status({ duration, videoRef }: Props) {
  const [played, setPlayed] = React.useState(false);
  const [playingTime, setPlayingTime] = React.useState(0);

  const { onHoverEnd, onHoverStart } = useTooltip();

  const playPaseControl = () => {
    setPlayed((prev) => {
      if (!prev) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }

      return !prev;
    });
  };

  const onChange = (value: number) => {
    if (videoRef.current) {
      const newValue = Math.round(value / 1000);
      videoRef.current.currentTime = newValue;
      console.log(newValue);

      setPlayingTime(newValue * 1000);
    }
  };

  React.useEffect(() => {
    if (played) {
      const timer = setInterval(() => {
        if (videoRef.current) {
          setPlayingTime(Math.round(videoRef.current.currentTime) * 1000);
        }
      }, 10);

      return () => {
        clearInterval(timer);
      };
    }
  }, [played, videoRef]);

  React.useEffect(() => {
    if (
      videoRef.current &&
      !videoRef.current.loop &&
      played &&
      playingTime >= duration
    ) {
      setPlayed(false);
      setPlayingTime(0);
    }
  }, [playingTime, videoRef, played, duration]);
  return (
    <div className={className.root}>
      <button
        aria-label={played ? "Pause" : "Play"}
        onClick={playPaseControl}
        type="button"
        className={"h-8 w-8 text-white flex items-center justify-center"}
        onMouseEnter={(e) => {
          onHoverStart(e, {
            text: played ? "Pause" : "Play",
            className: "capitalize",
            hideArrow: true,
            anchorOrigin: { horizontal: "center", vertical: "top" },
          });
        }}
        onMouseLeave={() => {
          onHoverEnd();
        }}
      >
        {!played ? <BiPlay size={30} /> : <BiPause size={30} />}
      </button>
      <Timer duration={playingTime} />
      <span className="text-xs text-white">/</span>
      <Timer duration={duration} />
      <Slider
        value={playingTime}
        onChange={onChange}
        max={duration}
        classes={{ root: "flex-grow p-1" }}
      />
    </div>
  );
}

Status.displayName = "Video.Status";
