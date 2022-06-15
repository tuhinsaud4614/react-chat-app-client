import * as React from "react";

const className = {
  root: "h-12 w-12 rounded-[0.625rem] inline-block overflow-hidden bg-gray-200",
  img: "h-12 w-12 object-cover",
};

export default function PreviewImage({
  src,
  alt,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <span className={className.root}>
      <img {...rest} alt={alt} src={src} className={className.img} />
    </span>
  );
}

PreviewImage.displayName = "ChatBox.Preview.Image";
