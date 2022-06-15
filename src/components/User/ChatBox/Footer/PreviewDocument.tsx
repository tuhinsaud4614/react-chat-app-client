import { BiFile } from "react-icons/bi";

const className = {
  root: "h-12 w-32 rounded-[0.625rem] flex items-center overflow-hidden p-2 bg-gray-200",
  icon: "w-8 h-8 flex items-center justify-center bg-white text-neutral-500 rounded-full",
  textWrapper: "break-words overflow-hidden pl-1.5 basis-[calc(100%-2rem)]",
  text: "line-clamp-2 text-xs text-neutral-700",
};

interface Props {
  title: string;
  ext: string;
}

export default function PreviewDocument({ title }: Props) {
  return (
    <div className={className.root}>
      <span className={className.icon}>
        <BiFile size={24} />
      </span>
      <div className={className.textWrapper}>
        <span className={className.text}>{title}</span>
      </div>
    </div>
  );
}

PreviewDocument.displayName = "ChatBox.Preview.Document";
