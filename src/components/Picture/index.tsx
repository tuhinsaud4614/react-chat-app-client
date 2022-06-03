import { nanoid } from "nanoid";
import { Fragment, ImgHTMLAttributes } from "react";
import { instanceOf } from "../../utils";
import { IExtendedImage, INormalImage } from "../../utils/interfaces";

interface Props
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "src" | "alt" | "width" | "height"
  > {
  image: IExtendedImage | INormalImage;
}

export default function Picture({ image, ...rest }: Props) {
  // instanceof check which kind of interface it is
  if (instanceOf<INormalImage>(image, "src")) {
    return (
      <img
        {...rest}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    );
  }

  const images = Object.keys(image) as (keyof IExtendedImage)[];
  return (
    <picture>
      {images.map((key) => {
        if (key === "main") {
          return (
            <img
              {...rest}
              key={nanoid(8)}
              src={image[key].originalUrl}
              alt={image[key].originalName}
              width={image[key].width}
              height={image[key].height}
            />
          );
        }
        return (
          <Fragment key={nanoid(4)}>
            <source
              media={`(min-width:${image[key].width}px)`}
              srcSet={image[key].webpUrl}
            />
            <source
              media={`(min-width:${image[key].width}px)`}
              srcSet={image[key].originalUrl}
            />
          </Fragment>
        );
      })}
    </picture>
  );
}
