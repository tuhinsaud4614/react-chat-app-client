import * as React from "react";
import { BiX } from "react-icons/bi";
import { IChatBoxAttachment } from ".";
import PreviewDocument from "./PreviewDocument";
import PreviewImage from "./PreviewImage";
import PreviewVideo from "./PreviewVideo";

const className = {
  root: "mr-3 basis-0",
  wrapper: "relative",
  closeBtn:
    "absolute -top-2 -right-2 z-20 h-6 w-6 flex items-center justify-center bg-white rounded-full border hover:bg-gray-300 active:scale-90",
};

interface Props {
  attachment: Omit<IChatBoxAttachment, "file">;
  onClose?(): void;
}

export default function Preview({ attachment, onClose }: Props) {
  let component: React.ReactNode;

  switch (attachment.type) {
    case "IMAGE":
      component = <PreviewImage src={attachment.src} alt={attachment.title} />;
      break;
    case "VIDEO":
      component = <PreviewVideo src={attachment.src} />;
      break;
    default:
      component = (
        <PreviewDocument ext={attachment.ext} title={attachment.title} />
      );
      break;
  }

  return (
    <div className={className.root}>
      <div className={className.wrapper}>
        <button
          type="button"
          aria-label="Remove attachment"
          className={className.closeBtn}
          onClick={onClose}
        >
          <BiX size={16} />
        </button>
        {component}
      </div>
    </div>
  );
}

Preview.displayName = "ChatBox.Preview";
