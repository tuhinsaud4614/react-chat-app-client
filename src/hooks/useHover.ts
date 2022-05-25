import * as React from "react";

function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: React.RefObject<T>
): boolean {
  const [value, setValue] = React.useState<boolean>(false);

  React.useEffect(() => {
    const currentEle = elementRef.current;
    const handleMouseEnter = () => setValue(true);
    const handleMouseLeave = () => setValue(false);

    currentEle?.addEventListener("mouseenter", handleMouseEnter);
    currentEle?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      currentEle?.removeEventListener("mouseenter", handleMouseEnter);
      currentEle?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [elementRef]);
  return value;
}

export default useHover;
