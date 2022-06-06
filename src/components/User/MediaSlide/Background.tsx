import * as React from "react";
import { IExtendedImage, INormalImage } from "../../../utils/interfaces";
import Picture from "../../Picture";

const className = {
  root: "absolute inset-0 flex items-center justify-center opacity-30 overflow-hidden",
  container: "w-[10%] h-[10%] scale-[11] blur-[2px]",
  img: "object-cover w-full h-full",
};

interface Props {
  image: IExtendedImage | INormalImage;
}

export default function Background({ image }: Props) {
  return (
    <div className={className.root}>
      <div className={className.container}>
        <Picture image={image} className={className.img} />
      </div>
    </div>
  );
}

Background.displayName = "MediaSlide.Background";
