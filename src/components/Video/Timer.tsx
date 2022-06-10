import * as React from "react";

const className = {
  duration: "mx-1 flex items-center text-xs text-white",
  time: "inline-block",
};

export default function Timer({ duration }: { duration: number }) {
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
}

Timer.displayName = "Video.Timer";
