import { nanoid } from "nanoid";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MediaPageRoute } from "../../../../pages/user/media";
import { demoImage } from "../../../../utils/demo-data";
import Picture from "../../../Picture";
import TabContent from "./TabContent";
import TabContentItem from "./TabContentItem";

const className = {
  imageContainer: "absolute inset-0.5 focus:ring focus:ring-cyan-300",
  image: "h-full w-full object-cover",
  wrapper: "absolute content-[''] inset-0 z-10 bg-black/25",
  play: "absolute text-white z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  duration:
    "absolute bottom-1 right-1 z-30 bg-white rounded-full leading-tight text-xs px-1 py-0.5",
};

export default function Videos() {
  return (
    <TabContent>
      {Array.from({ length: 10 }, () => nanoid()).map((video) => (
        <TabContentItem key={video}>
          <Link
            aria-label={`Videos ${video}`}
            to={`${MediaPageRoute}?type=video&conversationId=${video}&messageId=${video}`}
            className={className.imageContainer}
          >
            <Picture image={demoImage} className={className.image} />
            <span className={className.wrapper}>
              <BiPlayCircle className={className.play} size={40} />
              <span className={className.duration}>2:10</span>
            </span>
          </Link>
        </TabContentItem>
      ))}
    </TabContent>
  );
}

Videos.displayName = "MediaAndFiles.Videos";
