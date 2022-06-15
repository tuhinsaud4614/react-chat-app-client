import { AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import * as React from "react";
import { BiSend, BiSmile } from "react-icons/bi";
import { useTooltip } from "../../../../hooks";
import { removeAllSpacesFromText } from "../../../../utils";
import { AttachmentType } from "../../../../utils/types";
import AttachFile from "./AttachFile";
import AttachMore from "./AttachMore";
import GIFS from "./Gifs";
import MoreActions from "./MoreActions";
import Preview from "./Preview";
import Stickers from "./Stickers";

const className = {
  root: "p-3 bg-white flex items-end",
  btn: "h-9 w-9 flex items-center justify-center rounded-full text-secondary hover:bg-secondary/10 active:bg-secondary/20 text-2xl",
  wrapper:
    "min-w-0 flex-grow basis-0 bg-[#868e991a] text-neutral-600 rounded-[1.25rem] flex flex-col",
  inputContainer: "flex items-end",
  inputWrapper:
    "min-w-0 basis-0 flex-grow min-h-[2.25rem] py-1.5 pl-4 flex items-center",
  input: "min-w-0 flex-grow bg-transparent border-0 outline-none resize-none",
  previews: "flex items-center px-3 pt-3 overflow-x-auto",
};

export interface IChatBoxAttachment {
  id: string;
  type: AttachmentType;
  src: string;
  ext: string;
  title: string;
  file: File;
}

export default function ChatBoxFooter() {
  const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = React.useState("");
  const [attachments, setAttachments] = React.useState<IChatBoxAttachment[]>(
    []
  );
  const { onHoverEnd, onHoverStart } = useTooltip();

  function changeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    // const value = removeAllSpacesFromText(event.target.value);
    // if (value.length) {
    // }
    setValue(event.target.value);
  }

  function fileChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const currentFiles = event.currentTarget.files;

    if (currentFiles !== null && currentFiles.length >= 1) {
      const temp: IChatBoxAttachment[] = [];
      [...currentFiles].forEach((file) => {
        const ext = /[^.]+$/.exec(file.name)?.[0];
        let fileType: AttachmentType = "DOCUMENT";
        if (file.type.startsWith("image/")) {
          fileType = "IMAGE";
        } else if (file.type.startsWith("video/")) {
          fileType = "VIDEO";
        }

        const url = URL.createObjectURL(file);
        if (ext) {
          temp.push({
            id: nanoid(4),
            ext: ext,
            file: file,
            src: url,
            title: file.name,
            type: fileType,
          });
        }
      });

      setAttachments([...temp]);

      // const file = event.currentTarget.files[0];
      // const type = file.type.replace("image/", "");
      // if (
      //   !["jpg", "png", "jpeg", "gif"].includes(type) ||
      //   file.size > 5 * 1000000
      // ) {
      //   return;
      // }
    }
  }

  React.useLayoutEffect(() => {
    const textareaEle = textareaRef.current;
    if (textareaEle) {
      textareaEle.style.height = "18px";
      textareaEle.style.height = `${Math.min(textareaEle.scrollHeight, 124)}px`;
    }
  }, [value]);

  const newValue = removeAllSpacesFromText(value);

  return (
    <div aria-label="Chat-Box Footer" className={className.root}>
      <AnimatePresence initial={false}>
        {(newValue || attachments.length !== 0) && <MoreActions />}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {!newValue && attachments.length === 0 && (
          <AttachFile onChange={fileChangeHandler} />
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {!newValue && attachments.length === 0 && <Stickers />}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {!newValue && attachments.length === 0 && <GIFS />}
      </AnimatePresence>
      <div className={className.wrapper}>
        {!!attachments.length && (
          <div className={className.previews}>
            {attachments.map((attachment) => (
              <Preview
                key={attachment.id}
                attachment={attachment}
                onClose={() => {
                  setAttachments((prev) =>
                    prev.filter((at) => at.id !== attachment.id)
                  );
                }}
              />
            ))}
            <AttachMore onChange={fileChangeHandler} />
          </div>
        )}
        <section className={className.inputContainer}>
          <div className={className.inputWrapper}>
            <textarea
              value={value}
              ref={textareaRef}
              placeholder="Aa"
              className={className.input}
              onChange={changeHandler}
            />
          </div>
          <button
            type="button"
            aria-label={"Open more actions"}
            className={className.btn}
            onMouseEnter={(e) => {
              onHoverStart(e, {
                text: "Choose an emoji",
                anchorOrigin: { vertical: "top", horizontal: "center" },
              });
            }}
            onMouseLeave={(e) => {
              onHoverEnd();
            }}
          >
            <BiSmile size={24} />
          </button>
        </section>
      </div>
      <button
        type="button"
        aria-label={newValue ? "Press enter to send" : "Send a 😮"}
        className={className.btn}
        onMouseEnter={(e) => {
          onHoverStart(e, {
            text: newValue ? "Press enter to send" : "Send a 😮",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          });
        }}
        onMouseLeave={(e) => {
          onHoverEnd();
        }}
      >
        {newValue || attachments.length !== 0 ? <BiSend size={24} /> : "😮"}
      </button>
    </div>
  );
}

ChatBoxFooter.displayName = "ChatBox.Footer";
