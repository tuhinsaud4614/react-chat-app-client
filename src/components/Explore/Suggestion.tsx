import { demoUsers } from "../../utils/demo-data";
import SuggestionItem from "./SuggestionItem";

const className = {
  root: "px-4 pb-2.5",
  header: "text-sm text-neutral-500 pb-2.5",
  items: "list-none m-0 flex flex-col",
};

export default function Suggestion() {
  return (
    <div className={className.root}>
      <p className={className.header}>Suggested</p>
      <ul className={className.items}>
        {demoUsers.map((user) => (
          <SuggestionItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
