import classNames from "classnames";
import { nanoid } from "nanoid";
import React from "react";
import { IExtendedImage, INormalImage } from "../../../utils/interfaces";
import Picture from "../../Picture";

const className = {
  root: "max-w-full overflow-hidden h-14 relative z-10",
  items: "max-w-full list-none m-0 py-2.5 flex items-center duration-200",
  item: "px-1.5 h-9",
  btn: "w-9 h-9 overflow-hidden rounded-md opacity-40 hover:opacity-100",
  img: "h-9 w-9 object-cover",
};

interface Props {
  current: number;
  onTab: (index: number) => void;
  images: (IExtendedImage | INormalImage)[];
}

export default function Slides({ onTab, images, current }: Props) {
  const listRef = React.useRef<HTMLUListElement | null>(null);
  const itemRef = React.useRef<HTMLLIElement | null>(null);
  const [translateX, setTranslateX] = React.useState(0);

  React.useEffect(() => {
    const onResize = () => {
      const listEle = listRef.current;
      const itemEle = itemRef.current;

      if (listEle && itemEle) {
        const itemWidth = itemEle.clientWidth;
        const listWidth = listEle.clientWidth;
        const rest = images.length * itemWidth - listWidth;

        const mid = Math.round(listWidth / itemWidth / 2);
        const translateValue = Math.abs(current + 1 - mid) * itemWidth;

        if ((current + 1) * itemWidth < listWidth / 2) {
          return setTranslateX(0);
        }
        if (translateValue >= rest) {
          return setTranslateX(rest);
        }
        if (rest - translateValue < itemWidth) {
          return setTranslateX(rest);
        }
        setTranslateX(translateValue);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, images.length]);

  return (
    <section className={className.root}>
      <ul
        className={className.items}
        ref={listRef}
        style={{ transform: `translate3d(-${translateX}px, 0, 0)` }}
      >
        {images.map((img, index) => (
          <li className={className.item} key={nanoid()} ref={itemRef}>
            <button
              type="button"
              aria-label={`Thumbnail-${index + 1}`}
              onClick={() => {
                onTab(index);
              }}
              className={classNames(
                className.btn,
                current === index && "!opacity-100"
              )}
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
