import { useRipple } from "../../hooks";
import { demoUsers } from "../../utils/demo-data";
import VerticalUserTile from "../VerticalUserTile";

const className = {
  root: "px-4 py-2.5",
  header: "flex items-center justify-between",
  headerText: "text-sm text-neutral-500",
  headerBtn:
    "px-2 py-1.5 text-sm text-secondary hover:bg-primary/10 rounded-md",
  items: "list-none m-0 grid gap-4 grid-cols-4",
};

export default function RecentSearch() {
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });

  return (
    <div className={className.root}>
      <section className={className.header}>
        <span className={className.headerText}>Recent searches</span>
        <button
          className={className.headerBtn}
          type="button"
          aria-label="Edit recent search"
          onClick={(e) => {
            mouseEvent(e);
          }}
        >
          Edit
        </button>
      </section>
      <ul className={className.items}>
        {demoUsers.map((user) => (
          <VerticalUserTile key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
