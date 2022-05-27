import { useRipple } from "../../hooks";
import { demoUsers } from "../../utils/demo-data";
import EditSearchItem from "./EditSearchItem";

const className = {
  root: "px-4 py-2.5",
  header: "flex items-center justify-between",
  headerText: "text-sm text-neutral-500",
  clearBtn:
    "px-2 py-1.5 text-sm text-secondary hover:bg-primary/10 rounded-md uppercase",
  items: "list-none m-0 flex flex-col",
};

export default function EditSearch() {
  const { mouseEvent } = useRipple({ className: "bg-primary/30" });
  return (
    <div className={className.root}>
      <section className={className.header}>
        <span className={className.headerText}>Recent searches</span>
        <button
          className={className.clearBtn}
          type="button"
          aria-label="Clear all"
          onClick={(e) => {
            mouseEvent(e);
          }}
        >
          Clear all
        </button>
      </section>
      <ul className={className.items}>
        {demoUsers.map((user) => (
          <EditSearchItem
            key={user.id}
            user={user}
            onClear={(id) => {
              console.log(id);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
