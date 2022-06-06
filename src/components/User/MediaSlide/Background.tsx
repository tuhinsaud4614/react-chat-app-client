import * as React from "react";
import { IExtendedImage, INormalImage } from "../../../utils/interfaces";
import Picture from "../../Picture";

const className = {
  backdrop: "w-full h-full bg-black",
  root: "absolute inset-0 flex items-center justify-center opacity-30",
  container: "w-[10%] h-[10%] overflow-hidden scale-[11] blur-[2px]",
  img: "object-cover w-full h-full",
};

interface Props {
  image: IExtendedImage | INormalImage;
}

export default function Background({ image }: Props) {
  return (
    <React.Fragment>
      <div className={className.backdrop}></div>
      <section className={className.root}>
        <div className={className.container}>
          <Picture image={image} className={className.img} />
        </div>
      </section>
    </React.Fragment>
  );
}

Background.displayName = "MediaSlide.Background";
