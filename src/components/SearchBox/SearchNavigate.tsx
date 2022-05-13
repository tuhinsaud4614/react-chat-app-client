import classNames from "classnames";
import { BsSearch } from "react-icons/bs";

const className = {
  root: "flex items-center bg-[#868e991a] group hover:bg-primary/20 w-full rounded-3xl h-9 pl-2.5 pr-1.5 select-none",
  btnText:
    "inline-block capitalize text-[#65676B] group-hover:text-secondary text-sm ml-1.5",
};

export default function SearchNavigate({
  className: cls,
  children = "Search",
  ...rest
}: React.ComponentPropsWithRef<"button">) {
  return (
    <button {...rest} className={classNames(className.root, cls)} type="button">
      <BsSearch
        size={16}
        className="text-[#65676B] group-hover:text-secondary"
      />
      <span className={className.btnText}>{children}</span>
    </button>
  );
}
