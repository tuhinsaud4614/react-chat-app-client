import classNames from "classnames";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { clamp, debounce } from "lodash";
import * as React from "react";

const className = {
  wrapper: "relative flex flex-col justify-center",
  verticalWrapper: "h-[inherit]",
  line: "absolute rounded-full",
  horizontalLine: "w-full h-2 top-1/2 -translate-y-1/2",
  verticalLine: "h-full w-2 left-1/2 -translate-x-1/2",
  progress: "absolute",
  ball: "z-10 relative inline-block bg-secondary rounded-full",
  clickable: "absolute",
  horizontalClickable: "w-full h-4 top-1/2 -translate-y-1/2",
  verticalClickable: "w-4 h-full left-1/2 -translate-x-1/2",
};

interface Props {
  max?: number;
  min?: number;
  handleSize?: number;
  progressBarColor?: string;
  backGroundColor?: string;
  onChange?(value: number): void;
  value?: number;
  direction?: "vertical" | "horizontal";
  classes?: {
    root?: string;
    wrapper?: string;
    line?: string;
    ball?: string;
  };
}

function Root({
  max = 100,
  min = 0,
  handleSize,
  progressBarColor = "#50baec",
  backGroundColor = "#d1d5db",
  onChange,
  value,
  classes,
  direction = "horizontal",
}: Props) {
  const BALL_SIZE = handleSize || 20;
  const [dragging, setDragging] = React.useState(false);
  const constraintRef = React.useRef<HTMLDivElement | null>(null);
  const progressRef = React.useRef<HTMLDivElement | null>(null);
  const ballRef = React.useRef<HTMLSpanElement | null>(null);

  const ballPosition = useMotionValue(0);
  const progressBarBg = useMotionValue(progressBarColor);
  const backGroundBg = useMotionValue(backGroundColor);
  const directionMotion = useMotionValue(
    direction === "horizontal" ? "90deg" : "to top"
  );
  const progress = useTransform(ballPosition, (v) =>
    direction === "horizontal" ? v + BALL_SIZE / 2 : Math.abs(v - BALL_SIZE / 2)
  );
  const lineBackground = useMotionTemplate`linear-gradient(${directionMotion}, ${progressBarBg} ${progress}px, ${backGroundBg} 0)`;

  const dragHandler = () => {
    const ballEle = ballRef.current;
    const progressEle = progressRef.current;
    if (!ballEle || !progressEle) {
      return;
    }
    debounce(() => {
      const ballBound = ballEle.getBoundingClientRect();
      const ballBoundPosition =
        direction === "horizontal" ? ballBound.x : ballBound.y;

      const middleOfBall = ballBoundPosition + ballBound.width / 2;
      const progressBound = progressEle.getBoundingClientRect();
      const progressBoundPosition =
        direction === "horizontal"
          ? progressBound.x
          : progressBound.y + progressBound.height;

      const progressBoundHorW =
        direction === "horizontal" ? progressBound.width : progressBound.height;

      const newProgress =
        (middleOfBall - progressBoundPosition) / progressBoundHorW;

      onChange &&
        onChange(
          direction === "horizontal"
            ? newProgress
            : Math.abs(newProgress) * (max - min)
        );
    }, 100)();
  };

  const pointerDownHandler = (event: React.PointerEvent<HTMLDivElement>) => {
    const progressEle = progressRef.current;
    if (!progressEle) {
      return;
    }
    const { left, width, bottom, height } = progressEle.getBoundingClientRect();
    const position =
      direction === "horizontal" ? event.pageX - left : event.pageY - bottom;

    const newProgress =
      position / (direction === "horizontal" ? width : height);

    const newValue =
      (direction === "horizontal" ? 1 : -1) * newProgress * (max - min);

    onChange && onChange(clamp(newValue, min, max));
    animate(
      ballPosition,
      newProgress * (direction === "horizontal" ? width : height)
    );
  };

  React.useEffect(() => {
    const progressEle = progressRef.current;
    if (!progressEle || value === undefined) {
      return;
    }
    const newProgress = value / (max - min);
    const progressBound = progressEle.getBoundingClientRect();

    ballPosition.set(
      newProgress *
        (direction === "horizontal"
          ? progressBound.width
          : progressBound.height)
    );
  }, [ballPosition, direction, max, min, value]);

  return (
    <div className={classNames(classes?.root)}>
      <section
        className={classNames(
          className.wrapper,
          direction === "vertical" && className.verticalWrapper,
          classes?.wrapper
        )}
      >
        <motion.div
          className={classNames(
            className.line,
            direction === "horizontal"
              ? className.horizontalLine
              : className.verticalLine
          )}
          style={{
            background: lineBackground,
          }}
        />
        <div
          ref={progressRef}
          className={className.progress}
          style={
            direction === "horizontal"
              ? { left: BALL_SIZE / 2, right: BALL_SIZE / 2 }
              : { bottom: BALL_SIZE / 2, top: BALL_SIZE / 2 }
          }
        />
        <div
          ref={constraintRef}
          className={classNames(
            direction === "vertical" ? "h-full flex items-end" : "flex"
          )}
        >
          <motion.span
            ref={ballRef}
            className={classNames(
              className.ball,
              dragging ? "cursor-grabbing" : "cursor-grab"
            )}
            drag={
              onChange ? (direction === "horizontal" ? "x" : "y") : undefined
            }
            dragMomentum={false}
            dragConstraints={constraintRef}
            dragElastic={0}
            onDrag={dragHandler}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            onPointerDown={() => setDragging(true)}
            onPointerUp={() => setDragging(false)}
            style={{
              width: BALL_SIZE,
              height: BALL_SIZE,
              [direction === "horizontal" ? "x" : "y"]: ballPosition,
            }}
            animate={{ scale: dragging ? 1.2 : 1 }}
          />
        </div>
        <div
          className={classNames(
            className.clickable,
            direction === "horizontal"
              ? className.horizontalClickable
              : className.verticalClickable
          )}
          onPointerDown={onChange ? pointerDownHandler : undefined}
        />
      </section>
    </div>
  );
}

const Slider = React.memo(Root, (prev, next) => prev.value === next.value);
export default Slider;
