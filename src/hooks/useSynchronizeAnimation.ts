import * as React from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

let previousTime: number | null = null;

export default function useSynchronizeAnimation<
  T extends Element = HTMLDivElement
>(animationName: string) {
  const ref = React.useRef<T | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const animations = document
      .getAnimations()
      .filter(
        (animation) =>
          animation instanceof CSSAnimation &&
          animation.animationName === animationName
      ) as CSSAnimation[];

    if (animations.length === 0) return;

    const myAnimation = animations.find(
      (animation) =>
        animation.effect &&
        "target" in animation.effect &&
        animation.effect["target"] === ref.current
    );

    if (!myAnimation) {
      return;
    }

    if (myAnimation !== animations[0] && previousTime) {
      myAnimation.currentTime = previousTime;
    }

    if (myAnimation !== animations[0]) {
      myAnimation.currentTime = animations[0].currentTime;
    }

    return () => {
      if (myAnimation === animations[0]) {
        previousTime = myAnimation.currentTime;
      }
    };
  }, [animationName]);

  return ref;
}
