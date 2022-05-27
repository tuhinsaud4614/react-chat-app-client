import { demoUsers } from "../../utils/demo-data";
import HorizontalUserTile from "../HorizontalUserTile";

const className = {
  root: "px-4 py-2.5",
  items: "list-none m-0 flex flex-col",
};

export default function Result() {
  return (
    <div className={className.root}>
      <ul className={className.items}>
        {demoUsers.map((user) => (
          <HorizontalUserTile key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
