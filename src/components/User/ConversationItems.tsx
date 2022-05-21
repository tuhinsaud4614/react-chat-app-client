import { demoUsers } from "../../utils/demo-data";
import ConversationItem from "./ConversationItem";

const className = {
  root: "px-1.5",
  items: "m-0 list-none flex flex-col",
};

export default function ConversationItems() {
  return (
    <div className={className.root}>
      <ul className={className.items}>
        {demoUsers.map((user) => (
          <ConversationItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
