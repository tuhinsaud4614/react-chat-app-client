import classNames from "classnames";
import {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  useState,
} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TiInfoOutline } from "react-icons/ti";

const className = {
  root: "py-1.5",
  formControl: "border px-4 py-3.5 rounded-md flex items-center",
  formInput:
    "outline-0 shadow-none text-lg bg-transparent text-neutral-800 basis-full min-w-0 focus:placeholder:text-[#dddfe2]",
  show: "outline-0 shadow-none border-0 bg-transparent ml-1.5",
  showIcon: "text-[#7f7f7f] cursor-pointer",
  error: "mt-2 text-xs text-red-500",
};

type InputType =
  | TextareaHTMLAttributes<HTMLTextAreaElement>
  | InputHTMLAttributes<HTMLInputElement>;

interface Props {
  error?: ReactNode;
  touched?: boolean;
  classes?: {
    root?: string;
    formControl?: string;
    formInput?: string;
    show?: string;
    error?: string;
  };
  multiline?: boolean;
}

export default function Input({
  className: cls,
  error,
  touched = false,
  classes,
  value,
  multiline = false,
  ...rest
}: Props & InputType) {
  const [show, setShow] = useState(false);
  let icon;

  if (
    !multiline &&
    (rest as InputHTMLAttributes<HTMLInputElement>).type === "password" &&
    value
  ) {
    icon = (
      <button
        onClick={() => setShow((prev) => !prev)}
        type="button"
        className={className.show}
      >
        {show ? (
          <FaEye className={className.showIcon} size={20} />
        ) : (
          <FaEyeSlash className={className.showIcon} size={20} />
        )}
      </button>
    );
  } else {
    icon = touched && error && (
      <TiInfoOutline className="text-red-500 ml-1.5" size={20} />
    );
  }

  return (
    <div className={classNames(className.root, classes?.root)}>
      <div
        className={classNames(
          className.formControl,
          classes?.formControl,
          touched && error ? "border-red-500" : "border-[#dddfe2]"
        )}
      >
        {multiline ? (
          <textarea
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            className={classNames(cls, classes?.formInput, className.formInput)}
            value={value}
          />
        ) : (
          <input
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
            className={classNames(cls, classes?.formInput, className.formInput)}
            value={value}
          />
        )}
        {icon}
      </div>
      {touched && error && (
        <div className={classNames(className.error, classes?.error)}>
          {error}
        </div>
      )}
    </div>
  );
}
