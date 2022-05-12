import classNames from "classnames";
import * as React from "react";
import { IconBaseProps } from "react-icons";

interface Props
  extends Omit<React.SVGAttributes<SVGElement>, "children">,
    IconBaseProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  rootClassName?: string;
}

export default function AvatarIcon({ rootClassName, icon, ...rest }: Props) {
  const Icon = icon;
  return (
    <div
      className={classNames(
        "flex items-center justify-center overflow-hidden select-none",
        rootClassName
      )}
    >
      <Icon {...rest} />
    </div>
  );
}

AvatarIcon.displayName = "Avatar.Icon";
