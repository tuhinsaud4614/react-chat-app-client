import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { MediaPageRoute } from "../../../../pages/user/media";
import { demoImage } from "../../../../utils/demo-data";
import Picture from "../../../Picture";
import TabContent from "./TabContent";
import TabContentItem from "./TabContentItem";

const className = {
  imageContainer: "absolute inset-0.5 focus:ring focus:ring-cyan-300",
  image: "h-full w-full object-cover",
};

export default function Images() {
  return (
    <TabContent>
      {Array.from({ length: 10 }, () => nanoid()).map((img) => (
        <TabContentItem key={img}>
          <Link
            aria-label={`Image ${img}`}
            to={`${MediaPageRoute}?type=image&conversationId=${img}&messageId=${img}`}
            className={className.imageContainer}
          >
            <Picture image={demoImage} className={className.image} />
          </Link>
        </TabContentItem>
      ))}
    </TabContent>
  );
}

Images.displayName = "MediaAndFiles.Images";
