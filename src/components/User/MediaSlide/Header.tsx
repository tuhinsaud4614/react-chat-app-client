import classNames from "classnames";
import { BiDownload, BiX } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useTooltip } from "../../../hooks";
import { HomePageRoute } from "../../../pages/user/home";
import { demoImage } from "../../../utils/demo-data";
import HeaderForwardBtn from "./HeaderForwardBtn";

const className = {
  root: "z-50 absolute top-0 left-0 right-0 h-[113px] flex justify-between px-4 py-2.5",
  btn: "active:scale-90 rounded-full flex items-center justify-center ",
  closeBtn:
    "h-10 w-10 bg-white text-neutral-700 hover:bg-zinc-100 active:scale-90",
  actions: "flex items-center max-h-11",
  actionBtn:
    "h-9 w-9 text-white hover:text-neutral-700 hover:bg-white active:bg-zinc-100 mr-2",
};

export default function Header() {
  const { onHoverEnd, onHoverStart } = useTooltip();
  const navigate = useNavigate();
  return (
    <header
      className={className.root}
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), transparent)",
      }}
    >
      <button
        aria-label="Close"
        className={classNames(className.btn, className.closeBtn)}
        type="button"
        onClick={() => {
          navigate(HomePageRoute);
        }}
      >
        <BiX size={30} />
      </button>
      <div className={className.actions}>
        <a
          className={classNames(className.btn, className.actionBtn)}
          aria-label="Download"
          rel="noreferrer"
          target="_blank"
          href={demoImage.main.originalUrl}
          download
          onMouseEnter={(e) => {
            onHoverStart(e, {
              text: "Download",
              className: "capitalize",
              hideArrow: true,
            });
          }}
          onMouseLeave={(e) => {
            onHoverEnd();
          }}
        >
          <BiDownload size={20} />
        </a>
        <HeaderForwardBtn />
      </div>
    </header>
  );
}

Header.displayName = "MediaSlide.Header";
