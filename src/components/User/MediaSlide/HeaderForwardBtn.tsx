import * as React from "react";
import { BiSearch } from "react-icons/bi";
import { BsBoxArrowUp } from "react-icons/bs";
import { useTooltip } from "../../../hooks";
import { demoUsers } from "../../../utils/demo-data";
import Modal from "../../Modal";
import HeaderForwardItem from "./HeaderForwardItem";

const className = {
  forwardBtn:
    "active:scale-90 rounded-full flex items-center justify-center h-9 w-9 text-white hover:text-neutral-700 hover:bg-white active:bg-zinc-100",
  title: "flex-grow text-neutral-700 text-xl font-semibold text-center",
  container: "flex flex-col",
  content:
    "max-h-[371px] w-full flex-grow shrink overflow-y-auto overflow-x-hidden",
  searchBox: "px-4 py-2.5",
  searchInputWrapper:
    "rounded-full flex items-center text-neutral-700 bg-neutral-200 focus-within:bg-neutral-200/80",
  searchInput: "min-w-0 basis-full p-1.5 bg-transparent outline-none border-0",
  items: "list-none m-0",
  subTitle: "pt-4 px-4 font-semibold",
};

function Container() {
  return (
    <section className={className.container}>
      <div className={className.searchBox}>
        <section className={className.searchInputWrapper}>
          <BiSearch size={20} className="ml-1.5" />
          <input
            type="search"
            className={className.searchInput}
            placeholder="Search for people and group"
          />
        </section>
      </div>
      <div className={className.content}>
        <h3 className={className.subTitle}>Recent</h3>
        <ul className={className.items}>
          {demoUsers.map((user) => (
            <HeaderForwardItem key={user.id} user={user} onClick={(id) => {}} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function HeaderForwardBtn() {
  const [open, setOpen] = React.useState(false);
  const { onHoverEnd, onHoverStart } = useTooltip();
  return (
    <React.Fragment>
      <button
        className={className.forwardBtn}
        aria-label="Forward"
        onClick={() => {
          setOpen(true);
        }}
        onMouseEnter={(e) => {
          onHoverStart(e, {
            text: "Forward",
            className: "capitalize",
            hideArrow: true,
            anchorOrigin: { horizontal: "right" },
          });
        }}
        onMouseLeave={(e) => {
          onHoverEnd();
        }}
      >
        <BsBoxArrowUp size={20} />
      </button>
      <Modal
        onHide={() => setOpen(false)}
        open={open}
        classes={{ container: "!max-h-[424px]" }}
      >
        <Modal.Head closeIcon>
          <h3 className={className.title}>Forward</h3>
        </Modal.Head>
        <Modal.Body>
          <Container />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
HeaderForwardBtn.displayName = "MediaSlide.HeaderForwardButton";
