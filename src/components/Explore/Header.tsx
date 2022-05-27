import { ComponentPropsWithRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useRipple } from "../../hooks";

const className = {
  header: "px-4 py-2.5 flex items-center border-b",
  back: "text-secondary hover:bg-primary/10 flex items-center justify-center p-1 rounded-full",
  input:
    "min-w-0 basis-full py-1.5 px-2 outline-none border-0 bg-transparent text-neutral-800",
};

interface Props extends ComponentPropsWithRef<"input"> {}

export default function Header({ ...rest }: Props) {
  const navigate = useNavigate();
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });
  return (
    <header className={className.header}>
      <button
        type="button"
        className={className.back}
        onClick={(e) => {
          mouseEvent(e);
          navigate(-1);
        }}
      >
        <BsArrowLeft size={24} />
      </button>
      <input
        {...rest}
        className={className.input}
        type="search"
        placeholder="Search"
        autoFocus
      />
    </header>
  );
}
