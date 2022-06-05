import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { ImagesPageRoute } from "../../../../pages/user/images";
import { demoImage } from "../../../../utils/demo-data";
import Picture from "../../../Picture";

const className = {
  root: "list-none m-0 grid gap-2 grid-cols-[repeat(3,_minmax(100px,_1fr))] overflow-x-hidden w-full",
  item: "pb-[100%] relative",
  imageContainer:
    "absolute inset-0 rounded-md overflow-hidden focus:inset-0.5 focus:ring focus:ring-cyan-300",
  image: "h-full w-full object-cover",
};

export default function Images() {
  return (
    <ul className={className.root}>
      {Array.from({ length: 10 }, () => nanoid()).map((img) => (
        <li key={img} className={className.item}>
          <Link
            aria-label={`Image ${img}`}
            to={`${ImagesPageRoute}?conversationId=${img}&messageId=${img}`}
            className={className.imageContainer}
          >
            <Picture image={demoImage} className={className.image} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

Images.displayName = "MediaAndFiles.Images";
