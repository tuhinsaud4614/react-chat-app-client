import classNames from "classnames";
import * as React from "react";
import { IconBaseProps } from "react-icons";

interface Props
  extends Omit<React.SVGAttributes<SVGElement>, "children">,
    IconBaseProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  rootClassName?: string;
}

const AvatarIcon = React.forwardRef<HTMLDivElement, Props>(
  ({ rootClassName, icon, ...rest }, ref) => {
    const Icon = icon;
    return (
      <div
        ref={ref}
        className={classNames(
          "flex items-center justify-center overflow-hidden select-none",
          rootClassName
        )}
      >
        <Icon {...rest} />
      </div>
    );
  }
);

AvatarIcon.displayName = "Avatar.Icon";
export default AvatarIcon;
