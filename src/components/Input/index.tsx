import classNames from "classnames";
import { InputHTMLAttributes, ReactNode, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TiInfoOutline } from "react-icons/ti";

const className = {
  root: "py-1.5",
  formControl: "border px-4 py-3.5 rounded-md flex items-center",
  formInput:
    "outline-0 shadow-none text-lg bg-transparent autofill:bg-transparent text-neutral-800 block basis-full focus:placeholder:text-[#dddfe2]",
  show: "outline-0 shadow-none border-0 bg-transparent ml-1.5",
  showIcon: "text-[#7f7f7f] cursor-pointer",
  error: "mt-2 text-xs text-red-500",
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: ReactNode;
  touched?: boolean;
  classes?: {
    root?: string;
    formControl?: string;
    formInput?: string;
    show?: string;
    error?: string;
  };
}

export default function Input({
  className: cls,
  type,
  error,
  touched = false,
  classes,
  value,
  ...rest
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className={classNames(className.root, classes?.root)}>
      <div
        className={classNames(
          className.formControl,
          classes?.formControl,
          touched && error ? "border-red-500" : "border-[#dddfe2]"
        )}
      >
        <input
          {...rest}
          className={classNames(cls, classes?.formInput, className.formInput)}
          type={type === "password" ? (show ? "text" : "password") : type}
          value={value}
        />
        {type === "password" && value ? (
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
        ) : (
          touched &&
          error && <TiInfoOutline className="text-red-500 ml-1.5" size={20} />
        )}
      </div>
      {touched && error && (
        <div className={classNames(className.error, classes?.error)}>
          {error}
        </div>
      )}
    </div>
  );
}
