const className = {
  root: "relative",
  holder:
    "absolute right-0 bottom-0 bg-green-500 text-green-500 shadow-[rgb(255,255,255)_0px_0px_0px_2px] min-w-[0.63rem] min-h-[0.63rem] rounded-full after:content-[''] after:absolute after:top-0 after:left-0 after:border after:border-green-500 after:w-full after:h-full after:rounded-full after:animate-infinite-ripple",
};

interface Props extends React.ComponentPropsWithRef<"span"> {}

export default function Badge({ children, ...rest }: Props) {
  return (
    <span {...rest} className={className.root}>
      {children}
      <span className={className.holder} />
    </span>
  );
}
