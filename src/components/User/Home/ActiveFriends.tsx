import { demoUsers } from "../../../utils/demo-data";
import ActiveFriend from "./ActiveFriend";

const className = {
  wrapper: "px-2 bg-white",
  root: "list-none m-0 flex items-start overflow-x-auto",
};

export default function ActiveFriends() {
  const clickHandler = (id: string) => {
    console.log(id);
  };
  return (
    <section className={className.wrapper}>
      <ul className={className.root}>
        {demoUsers.map((user) => (
          <ActiveFriend
            key={user.id}
            onClick={() => clickHandler(user.id)}
            user={user}
          />
        ))}
      </ul>
    </section>
  );
}
