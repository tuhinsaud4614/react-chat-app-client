import { motion, MotionProps, Variants } from "framer-motion";
import * as React from "react";
import { PolymorphicPropsWithRef, PolymorphicRef } from "../../utils/types";

const variants: Variants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 },
};

type Props<T extends React.ElementType> = PolymorphicPropsWithRef<
  T,
  MotionProps
>;

type FC = (<T extends React.ElementType = "div">(
  props: Props<T>
) => React.ReactElement | null) & { displayName?: string };

const Body: FC = React.forwardRef(
  <T extends React.ElementType = "section">(
    { as, ...rest }: Props<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const Component = motion(`${as}`);
    return (
      <Component
        {...rest}
        ref={ref}
        key="content"
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={variants}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      />
    );
  }
);

Body.displayName = "Accordion.Body";
export default Body;
