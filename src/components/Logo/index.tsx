import classNames from "classnames";
import Img from "../../assets/logo-text.svg";

interface Props {
  classes?: {
    root?: string;
    img?: string;
  };
}

export default function Logo({ classes }: Props) {
  return (
    <div
      className={classNames("flex items-center justify-center", classes?.root)}
    >
      <img src={Img} alt="Logo" className={classNames(classes?.img)} />
    </div>
  );
}
