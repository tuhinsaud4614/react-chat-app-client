import { nanoid } from "nanoid";
import { IExtendedImage, INormalImage } from "../../../utils/interfaces";
import Picture from "../../Picture";

const className = {
  root: "w-full overflow-hidden h-14",
  items: "list-none m-0 py-2.5 flex items-center overflow-x-hidden",
  item: "px-1.5 h-9",
  btn: "w-9 h-9 overflow-hidden rounded-md relative z-10",
  img: "h-9 w-9 object-cover",
};

interface Props {
  current: number;
  onTab: (index: number) => void;
  images: IExtendedImage[] | INormalImage[];
}

export default function Slides({ onTab, images, current }: Props) {
  return (
    <section className={className.root}>
      <ul className={className.items}>
        {images.map((img, index) => (
          <li className={className.item} key={nanoid()}>
            <button
              type="button"
              aria-label={`Thumbnail-${index + 1}`}
              onClick={() => {
                onTab(index);
              }}
              className={className.btn}
            >
              <Picture image={img} className={className.img} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

Slides.displayName = "MediaSlide.Slides";
