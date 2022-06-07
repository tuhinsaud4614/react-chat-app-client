import * as React from "react";
import { EmojiKeyType, emojis } from ".";

const className = {
  emojis: "flex flex-wrap justify-start",
  emoji:
    "h-8 w-8 text-2xl flex items-center justify-center p-1 m-0.5 hover:bg-zinc-100 active:bg-zinc-200 rounded-full",
};

interface Props {
  id: keyof typeof emojis;
  icons: string[];
  onChange?(value: string): void;
  onObserver(id: EmojiKeyType): void;
}

function Root({ icons, onChange, onObserver, id }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!Boolean(window.IntersectionObserver) || !ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && id !== "Most Popular") {
          onObserver(id);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className.emojis} ref={ref}>
      {icons.map((emoji) => (
        <button
          key={emoji}
          className={className.emoji}
          onClick={onChange ? () => onChange(emoji) : undefined}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}

Root.displayName = "Emojis";
const Content = React.memo(Root, (prev, next) => prev.id === next.id);
export default Content;
