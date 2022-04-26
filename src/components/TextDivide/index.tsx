import classNames from "classnames";

interface Props {
  classes?: {
    root?: string;
    divide?: string;
    text?: string;
  };
  children: string;
}

export default function TextDivide({ classes, children }: Props) {
  return (
    <div className={classNames("flex items-center", classes?.root)}>
      <span
        className={classNames(
          "block border-b border-[#d7dade] flex-grow",
          classes?.divide
        )}
      />
      <span
        className={classNames(
          "text-[#d7dade] inline-block px-2",
          classes?.text
        )}
      >
        {children}
      </span>
      <span
        className={classNames(
          "block border-b border-[#d7dade] flex-grow",
          classes?.divide
        )}
      />
    </div>
  );
}
