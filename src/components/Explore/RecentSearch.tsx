import * as React from "react";
import { useRipple } from "../../hooks";
import { demoUsers } from "../../utils/demo-data";
import Modal from "../Modal";
import VerticalUserTile from "../VerticalUserTile";
import EditSearch from "./EditSearch";

const className = {
  root: "px-4 py-2.5",
  header: "flex items-center justify-between",
  headerText: "text-sm text-neutral-500",
  editBtn:
    "px-2 py-1.5 text-sm text-secondary hover:bg-primary/10 rounded-md uppercase",
  editBtnText: "text-sm text-neutral-500 px-4 pt-2.5",
  items: "list-none m-0 grid gap-4 grid-cols-4",
};

const EditButton = () => {
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <button
        className={className.editBtn}
        type="button"
        aria-label="Edit recent search"
        onClick={(e) => {
          mouseEvent(e);
          setOpen(true);
        }}
      >
        Edit
      </button>
      <Modal onHide={() => setOpen(false)} open={open} staticBack>
        <Modal.Head closeIcon>
          <h3 className="text-neutral-700 font-semibold">
            Edit search history
          </h3>
        </Modal.Head>
        <Modal.Body className="overflow-y-auto">
          <p className={className.editBtnText}>
            Changes will only apply to your recent searches list, which is from
            your history on this device
          </p>
          <EditSearch />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default function RecentSearch() {
  return (
    <div className={className.root}>
      <section className={className.header}>
        <span className={className.headerText}>Recent searches</span>
        <EditButton />
      </section>
      <ul className={className.items}>
        {demoUsers.map((user) => (
          <VerticalUserTile key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
