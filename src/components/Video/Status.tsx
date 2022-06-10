import * as React from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { useTooltip } from "../../hooks";
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

  React.useEffect(() => {
    if (played) {
      const timer = setInterval(() => {
        if (videoRef.current) {
          setPlayingTime(Math.floor(videoRef.current.currentTime) * 1000);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [played, playingTime, duration, videoRef]);

  React.useEffect(() => {
    if (videoRef.current && played && playingTime >= duration) {
      setPlayed(false);
      setPlayingTime(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playingTime, videoRef]);

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
      <div>g</div>
    </div>
  );
}

Status.displayName = "Video.Status";
