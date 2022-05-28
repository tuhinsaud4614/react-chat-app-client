import classNames from "classnames";
import * as React from "react";
import { BiBell, BiTrash, BiUser } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { useTouchable } from "../../hooks";
import Avatar from "../Avatar";
import ListTile from "../ListTile";
import Menu from "../Menu";

const className = {
  menuBtn:
    "hidden group-hover:flex items-center justify-center w-8 h-8 bg-zinc-50 rounded-full absolute z-10 right-9 top-1/2 -translate-y-1/2 shadow-mine-2 active:shadow-none",
  items: "list-none m-0",
  item: "p-2.5 hover:bg-primary/10 cursor-pointer",
  titles: "pl-2.5",
};

interface Props {
  userId: string;
}

const ConversationItemMenu = ({ userId }: Props) => {
  const [anchorEle, setAnchorEle] = React.useState<null | HTMLDivElement>(null);
  const touchable = useTouchable();

  React.useEffect(() => {
    if (touchable) {
      setAnchorEle(null);
    }
  }, [touchable]);

  return (
    <React.Fragment>
      <Menu
        open={Boolean(anchorEle)}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        fraction
        onClose={() => {
          setAnchorEle(null);
        }}
        anchorEle={anchorEle}
      >
        <section className="w-60 overflow-y-auto overflow-x-hidden">
          <ul className={className.items}>
            <li
              className={className.item}
              onClick={() => {
                setAnchorEle(null);
              }}
            >
              <ListTile classes={{ main: className.titles }}>
                <ListTile.Leading className="bg-slate-200 rounded-full p-1">
                  <Avatar.Icon icon={BiBell} size={16} />
                </ListTile.Leading>
                <ListTile.Title className="text-sm">
                  Mute notifications
                </ListTile.Title>
              </ListTile>
            </li>
            <li
              className={className.item}
              onClick={() => {
                setAnchorEle(null);
              }}
            >
              <ListTile classes={{ main: className.titles }}>
                <ListTile.Leading className="bg-slate-200 rounded-full p-1">
                  <Avatar.Icon icon={BiUser} size={16} />
                </ListTile.Leading>
                <ListTile.Title className="text-sm">
                  View profile
                </ListTile.Title>
              </ListTile>
            </li>
            <li
              className={className.item}
              onClick={() => {
                setAnchorEle(null);
              }}
            >
              <ListTile classes={{ main: className.titles }}>
                <ListTile.Leading className="bg-slate-200 rounded-full p-1">
                  <Avatar.Icon icon={BiTrash} size={16} />
                </ListTile.Leading>
                <ListTile.Title className="text-sm">Delete chat</ListTile.Title>
              </ListTile>
            </li>
          </ul>
        </section>
      </Menu>
      {!touchable && (
        <Avatar.Icon
          icon={HiDotsHorizontal}
          size={20}
          className="text-[#bcc0c4]"
          rootClassName={classNames(
            className.menuBtn,
            Boolean(anchorEle) && "!flex"
          )}
          rootProps={{
            onClick(event: React.MouseEvent<HTMLDivElement>) {
              setAnchorEle(event.currentTarget);
            },
          }}
        />
      )}
    </React.Fragment>
  );
};

ConversationItemMenu.displayName = "Conversation.Item.Menu";
export default ConversationItemMenu;
