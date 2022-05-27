import * as React from "react";
import { useRipple } from "../../hooks";
import { demoUsers } from "../../utils/demo-data";
import Modal from "../Modal";
import VerticalUserTile from "../VerticalUserTile";

const className = {
  root: "px-4 py-2.5",
  header: "flex items-center justify-between",
  headerText: "text-sm text-neutral-500",
  headerBtn:
    "px-2 py-1.5 text-sm text-secondary hover:bg-primary/10 rounded-md",
  items: "list-none m-0 grid gap-4 grid-cols-4",
};

const EditButton = () => {
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });
  const [open, setOpen] = React.useState(false);
  return (
    <button
      className={className.headerBtn}
      type="button"
      aria-label="Edit recent search"
      onClick={(e) => {
        mouseEvent(e);
        setOpen(true);
      }}
    >
      <Modal onHide={() => setOpen(false)} open={open} staticBack>
        <Modal.Head closeIcon>hello</Modal.Head>
        <Modal.Body>body</Modal.Body>
        <Modal.Foot>Foot</Modal.Foot>
      </Modal>
      Edit
    </button>
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
