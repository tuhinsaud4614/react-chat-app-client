import { demoUsers } from "../../utils/demo-data";
import ActiveFriend from "./ActiveFriend";

const className = {
  root: "list-none m-0 flex items-start overflow-x-auto",
};

export default function ActiveFriends() {
  return (
    <section>
      <ul className={className.root}>
        {demoUsers.map((user) => (
          <ActiveFriend key={user.id} user={user} />
        ))}
      </ul>
    </section>
  );
}
