import classNames from "classnames";
import * as React from "react";
import { BiPause, BiPlay } from "react-icons/bi";
import { useTooltip } from "../../hooks";
import { IVideo } from "../../utils/interfaces";

const className = {
  root: "relative",
  video: "object-contain",
  controls: "absolute bottom-0 left-0 right-0 z-50",
  controlBar: "flex items-center",
  leftControl: "flex items-center px-1",
  playPauseBtn: "h-8 w-8 text-white flex items-center justify-center",
  duration: "mx-1 flex items-center text-xs text-white",
  time: "inline-block",
};

const Timer = ({ duration }: { duration: number }) => {
  const seconds = duration / 1000;
  const numYears = Math.floor(seconds / 31536000);
  const numDays = Math.floor((seconds % 31536000) / 86400);
  const numHours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  const numMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  const numSeconds = (((seconds % 31536000) % 86400) % 3600) % 60;

  return (
    <div className={className.duration}>
      {!!numYears && (
        <React.Fragment>
          <time className={className.time}>{numYears}</time>:
        </React.Fragment>
      )}
      {!!numDays && (
        <React.Fragment>
          <time className={className.time}>{numDays}</time>:
        </React.Fragment>
      )}
      {!!numHours && (
        <React.Fragment>
          <time className={className.time}>{numHours}</time>:
        </React.Fragment>
      )}
      <time className={className.time}>{numMinutes}</time>:
      <time className={className.time}>
        {numSeconds.toString().length === 1 ? `0${numSeconds}` : numSeconds}
      </time>
    </div>
  );
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
  const [played, setPlayed] = React.useState(false);
  const [playingTime, setPlayingTime] = React.useState(0);
  const [muted, setMuted] = React.useState(false);

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
    if (played && playingTime < video.duration) {
      const timer = setInterval(() => {
        setPlayingTime((prev) => {
          return prev + 1000;
        });
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [played, playingTime, video.duration]);

  return (
    <div className={classNames(classes?.root, className.root)}>
      <video
        {...rest}
        ref={videoRef}
        className={classNames(className.video, cls)}
        src={video.src}
        playsInline
      />
      <section className={classNames(className.controls)}>
        <div className={className.controlBar}>
          <div className={className.leftControl}>
            <button
              aria-label={played ? "Pause" : "Play"}
              type="button"
              onClick={playPaseControl}
              className={className.playPauseBtn}
              onMouseEnter={(e) => {
                onHoverStart(e, {
                  text: played ? "Pause" : "Play",
                  className: "capitalize",
                  hideArrow: true,
                  anchorOrigin: { horizontal: "center", vertical: "top" },
                });
              }}
              onMouseLeave={(e) => {
                onHoverEnd();
              }}
            >
              {!played ? <BiPlay size={30} /> : <BiPause size={30} />}
            </button>
            <Timer duration={playingTime} />
            <span className="text-xs text-white">/</span>
            <Timer duration={video.duration} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
