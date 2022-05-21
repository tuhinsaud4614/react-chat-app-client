import classNames from "classnames";

const className = {
  root: "relative",
  dot: "absolute right-0.5 bottom-0.5 bg-green-500 shadow-[rgb(255,255,255)_0px_0px_0px_2px] min-w-[0.63rem] min-h-[0.63rem] rounded-full",
  dotRipple:
    "after:content-[''] after:absolute after:top-0 after:left-0 after:border after:border-green-500 after:w-full after:h-full after:rounded-full after:animate-infinite-ripple",
  content:
    "absolute top-0.5 right-0.5 flex items-center justify-center bg-green-500 text-white min-h-[1.25rem] min-w-[1.25rem] rounded-[1.25rem] text-xs leading-3 px-1.5",
};

interface Props extends React.ComponentPropsWithRef<"span"> {
  variant?: "dot" | "standard";
  ripple?: boolean;
  classes?: {
    wrapper?: string;
    root?: string;
  };
  content?: string;
}

export default function Badge({
  children,
  className: cls,
  variant = "standard",
  ripple = false,
  content,
  classes,
  ...rest
}: Props) {
  let item = (
    <span className={classNames(className.content, classes?.root)}>
      {content}
    </span>
  );
  if (variant === "dot") {
    item = (
      <span
        className={classNames(
          className.dot,
          ripple && className.dotRipple,
          classes?.root
        )}
      />
    );
  }
  return (
    <span
      {...rest}
      className={classNames(className.root, cls, classes?.wrapper)}
    >
      {children}
      {item}
    </span>
  );
}
