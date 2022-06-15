import * as React from "react";
import { FaFolderPlus } from "react-icons/fa";

const className = {
  root: "h-12 w-12 rounded-[0.625rem] shrink-0 flex items-center justify-center overflow-hidden bg-gray-200 text-neutral-700 cursor-pointer",
};

export default function AttachMore(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const clickHandler = () => {
    inputRef.current?.click();
  };

  return (
    <button
      type="button"
      aria-label="Upload another attachment"
      className={className.root}
      onClick={clickHandler}
    >
      <FaFolderPlus size={30} />
      <input
        {...props}
        ref={inputRef}
        type="file"
        className="hidden"
        multiple
      />
    </button>
  );
}

AttachMore.displayName = "ChatBox.AttachMore";
