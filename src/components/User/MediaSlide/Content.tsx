import * as React from "react";
import { IExtendedImage, INormalImage } from "../../../utils/interfaces";
import Picture from "../../Picture";

const className = {
  root: "flex-grow flex items-center justify-center h-[calc(100vh-56px)]",
  img: "max-h-[calc(100vh-56px)] h-auto w-auto max-w-full relative z-10",
};

interface Props {
  image: IExtendedImage | INormalImage;
}

export default function Content({ image }: Props) {
  return (
    <section className={className.root}>
      <Picture image={image} className={className.img} />
    </section>
  );
}

Content.displayName = "MediaSlide.Content";
