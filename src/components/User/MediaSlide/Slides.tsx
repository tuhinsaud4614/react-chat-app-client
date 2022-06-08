import classNames from "classnames";
import { nanoid } from "nanoid";
import React from "react";
import { IExtendedImage, INormalImage } from "../../../utils/interfaces";
import Picture from "../../Picture";

const className = {
  root: "max-w-full overflow-hidden h-14 relative z-10",
  items:
    "max-w-full list-none m-0 py-2.5 flex items-center transform duration-300",
  item: "px-1.5 h-9",
  btn: "w-9 h-9 overflow-hidden rounded-md opacity-40 hover:opacity-100",
  img: "h-9 w-9 object-cover",
};

interface Props {
  current: number;
  onTab: (index: number) => void;
  images: IExtendedImage[] | INormalImage[];
}

export default function Slides({ onTab, images, current }: Props) {
  const ref = React.useRef<HTMLUListElement | null>(null);
  const [translateX, setTranslateX] = React.useState(0);

  React.useLayoutEffect(() => {
    const onResize = () => {
      const currentEle = ref.current;
      if (currentEle) {
        const mid = Math.ceil(currentEle.clientWidth / 48 / 2);
        if (current + 1 >= mid && current + mid <= images.length) {
          setTranslateX(Math.abs(current - mid) * 48);
        }
      }
    };
    onResize();
    document.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, images.length]);

  return (
    <section className={className.root}>
      <ul
        className={className.items}
        ref={ref}
        style={{ transform: `translate3d(-${translateX}px, 0, 0)` }}
      >
        {images.map((img, index) => (
          <li className={className.item} key={nanoid()}>
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
