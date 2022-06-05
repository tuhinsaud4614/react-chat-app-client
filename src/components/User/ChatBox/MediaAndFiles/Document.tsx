import { nanoid } from "nanoid";
import * as React from "react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MediaPageRoute } from "../../../../pages/user/media";
import { getReadableFileSizeString } from "../../../../utils";
import ListTile from "../../../ListTile";

const className = {
  root: "py-2.5 border-b",
  tile: "w-full hover:bg-primary/10 active:bg-primary/30",
  leading: "p-3.5 rounded-lg bg-gray-300",
  tileTitle:
    "ml-2 line-clamp-1 text-sm font-semibold text-zinc-700 capitalize text-left",
  titleSubtitle:
    "ml-2 mt-1 line-clamp-1 text-xs text-zinc-500 text-left uppercase",
};

export default function Document() {
  const navigate = useNavigate();

  return (
    <li className={className.root}>
      <ListTile
        as="button"
        aria-label={`Document`}
        className={className.tile}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          navigate(
            `${MediaPageRoute}?type=document&conversationId=${nanoid()}&messageId=${nanoid()}`
          );
        }}
      >
        <ListTile.Leading className={className.leading}>
          <BsFileEarmarkPdfFill size={24} className="text-neutral-700" />
        </ListTile.Leading>
        <ListTile.Title className={className.tileTitle}>
          Lorem ipsum.pdf
        </ListTile.Title>
        <ListTile.Subtitle className={className.titleSubtitle}>
          {getReadableFileSizeString(1551859712)}
        </ListTile.Subtitle>
      </ListTile>
    </li>
  );
}

Document.displayName = "MediaAndFiles.Document";
