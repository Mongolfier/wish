import { forwardRef, type FC, type RefAttributes, type SVGProps } from "react";
import cn from "classnames";
import { Icon } from "@/core/Icon";

import css from "./Loader.module.css";

export interface LoaderProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const Loader: FC<LoaderProps & RefAttributes<SVGSVGElement>> =
  forwardRef<SVGSVGElement, LoaderProps>(
    ({ className, ...otherProps }, ref) => {
      return (
        <Icon
          {...otherProps}
          ref={ref}
          className={cn(css.loader, className)}
          name={"spinner"}
        />
      );
    }
  );
Loader.displayName = "Loader";
