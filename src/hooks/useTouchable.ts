import * as React from "react";

export default function useTouchable() {
  const [touchable, setTouchable] = React.useState(false);

  React.useEffect(() => {
    const handleSize = (e?: UIEvent) => {
      console.log("useTouchable");
      setTouchable(
        typeof window !== "undefined" &&
          ("ontouchstart" in window || Boolean(window.navigator.maxTouchPoints))
      );
    };

    handleSize();
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return touchable;
}
