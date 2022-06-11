import * as React from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import Menu from "../Menu";
import Slider from "../Slider";

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
}

export default function Sounds({ videoRef }: Props) {
  const [volume, setVolume] = React.useState(0);
  const [anchorEle, setAnchorEle] = React.useState<null | HTMLButtonElement>(
    null
  );

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (Boolean(anchorEle)) {
      return setAnchorEle(null);
    }
    setAnchorEle(e.currentTarget);
  };

  React.useEffect(() => {
    const videoEle = videoRef.current;
    if (videoEle) {
      videoEle.volume = volume / 100;
    }
  }, [videoRef, volume]);

  return (
    <React.Fragment>
      <Menu
        open={Boolean(anchorEle)}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        anchorEle={anchorEle}
        hideArrow
        classes={{
          container: "!bg-transparent !shadow-none p-2",
          root: "!bg-transparent !shadow-none",
        }}
      >
        <section className="h-28">
          <Slider
            direction="vertical"
            onChange={(value) => {
              setVolume(Math.floor(value));
            }}
            value={volume}
            classes={{ root: "h-[inherit]" }}
          />
        </section>
      </Menu>
      <button
        aria-label={"Sounds"}
        onClick={clickHandler}
        type="button"
        className={"h-8 w-8 text-white flex items-center justify-center"}
      >
        {volume === 0 ? <GiSpeakerOff size={30} /> : <GiSpeaker size={30} />}
      </button>
    </React.Fragment>
  );
}

Sounds.displayName = "Video.Sounds";
