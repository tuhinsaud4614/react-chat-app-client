import classNames from "classnames";
import { FC, ImgHTMLAttributes } from "react";
import { IExtendedImage, INormalImage } from "../../utils/interfaces";
import Picture from "../Picture";
import AvatarIcon from "./Icon";
import AvatarText from "./Text";

const className = {
  img: "w-full h-full object-cover",
};

interface Props
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "src" | "alt" | "width" | "height"
  > {
  image: IExtendedImage | INormalImage;
  rootClassName?: string;
}

type AvatarType = FC<Props> & {
  Text: typeof AvatarText;
  Icon: typeof AvatarIcon;
};

const Avatar: AvatarType = ({
  image,
  className: cls,
  rootClassName,
  ...rest
}: Props) => {
  return (
    <div className={rootClassName}>
      <Picture
        {...rest}
        className={classNames(className.img, cls)}
        image={image}
      />
    </div>
  );
  // instanceof check which kind of interface it is
  // if (instanceOf<INormalImage>(image, "src")) {
  //   return (
  //     <div className={rootClassName}>
  //       <img
  //         {...rest}
  //         className={classNames(className.img, cls)}
  //         src={image.src}
  //         alt={image.alt}
  //         width={image.width}
  //         height={image.height}
  //       />
  //     </div>
  //   );
  // }

  // const images = Object.keys(image) as (keyof IExtendedImage)[];
  // return (
  //   <div className={rootClassName}>
  //     <picture>
  //       {images.map((key) => {
  //         if (key === "main") {
  //           return (
  //             <img
  //               {...rest}
  //               className={classNames(className.img, cls)}
  //               key={nanoid(8)}
  //               src={image[key].originalUrl}
  //               alt={image[key].originalName}
  //               width={image[key].width}
  //               height={image[key].height}
  //             />
  //           );
  //         }
  //         return (
  //           <Fragment key={nanoid(4)}>
  //             <source
  //               media={`(min-width:${image[key].width}px)`}
  //               srcSet={image[key].webpUrl}
  //             />
  //             <source
  //               media={`(min-width:${image[key].width}px)`}
  //               srcSet={image[key].originalUrl}
  //             />
  //           </Fragment>
  //         );
  //       })}
  //     </picture>
  //   </div>
  // );
};

Avatar.Text = AvatarText;
Avatar.Icon = AvatarIcon;
export default Avatar;
