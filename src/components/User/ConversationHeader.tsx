import { demoImage } from "../../utils/demo-data";
import Avatar from "../Avatar";

const className = {
  root: "flex items-center justify-between",
  avatar: "w-10 h-10 overflow-hidden rounded-full",
};

export default function ConversationHeader() {
  return (
    <header className={className.root}>
      <Avatar image={demoImage} rootClassName={className.avatar} />
      {/* <Avatar.Text
        children="TB"
        className="bg-red-300 text-white text-base leading-none w-10 h-10 rounded-full"
      />
      <Avatar.Icon
        rootClassName="bg-red-300 w-10 h-10 rounded-full text-lg text-white"
        icon={FaAd}
      /> */}
    </header>
  );
}
