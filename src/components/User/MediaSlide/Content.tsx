import classNames from "classnames";
import * as React from "react";
import { instanceOf } from "../../../utils";
import {
  IExtendedImage,
  INormalImage,
  IVideo,
} from "../../../utils/interfaces";
import Picture from "../../Picture";
import Video from "../../Video";

const className = {
  root: "flex-grow flex items-center justify-center",
  resource: "h-auto w-auto max-w-full relative z-10",
  img: "max-h-[calc(100vh-56px)]",
  video: "max-h-[calc(100vh-112px)]",
};

interface Props {
  resource: IVideo | IExtendedImage | INormalImage;
}

export default function Content({ resource }: Props) {
  return (
    <section
      className={classNames(
        className.root,
        instanceOf<IVideo>(resource, "thumbnail")
          ? "h-[calc(100vh-112px)]"
          : "h-[calc(100vh-56px)]"
      )}
    >
      {instanceOf<IVideo>(resource, "thumbnail") ? (
        <Video
          video={resource}
          classes={{ root: classNames(className.resource, className.video) }}
          className={className.video}
        />
      ) : (
        <Picture
          image={resource}
          className={classNames(className.resource, className.img)}
        />
      )}
    </section>
  );
}

Content.displayName = "MediaSlide.Content";
