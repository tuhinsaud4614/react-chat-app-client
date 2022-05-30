import { demoUsers } from "../../../utils/demo-data";
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
        {/* it will render when loading */}
        {/* <ListTile.Skelton
          classes={{
            root: "p-2.5 border border-slate-200 shadow bg-white rounded-lg",
            content: "p-2.5",
            leading: "rounded-full bg-slate-200 h-10 w-10",
            title: "h-4 bg-slate-200 rounded w-1/2",
            subtitle: "h-3 bg-slate-200 rounded mt-2",
            tailing: "my-2.5 ml-2.5 h-4 w-4 bg-slate-200 rounded-full",
          }}
        /> */}
      </ul>
    </div>
  );
}

ConversationItems.displayName = "Conversation.Items";
