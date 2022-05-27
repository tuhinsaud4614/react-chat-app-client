import VerticalUserTile, { VerticalUserTileProps } from "../VerticalUserTile";

export default function ActiveFriend({ user, ...rest }: VerticalUserTileProps) {
  return (
    <VerticalUserTile user={user} {...rest} />
    // <li {...rest} className={className.root}>
    //   <Badge className={className.badge} variant="dot" ripple>
    //     {avatar}
    //   </Badge>
    //   <strong className={className.title}>{getUserName(user)}</strong>
    // </li>
  );
}
