import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from "classnames";

import css from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  mode?: "primary" | "secondary";
  isCircle?: boolean;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  size = "small",
  mode = "primary",
  isCircle,
  ...htmlProps
}) => {
  return (
    <button
      {...htmlProps}
      className={cn(css.button, css[mode], css[size], htmlProps.className, {
        [css.circle]: isCircle,
      })}
    >
      {!isCircle && <span className={css.text}>{children}</span>}
    </button>
  );
};
