import React from "react";
import { Button } from "./ui/button";
import clsx from "clsx";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type SRButtonProps = {
  btnText: string;
  padding?: string;
  margin?: string;
  radiuse?: string;
  href?: string;
  isLoading?: boolean;
  disabled?: boolean; // NEW
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  type?: "button" | "submit" | "reset";
};

const SRSButton: React.FC<SRButtonProps> = ({
  btnText,
  padding = "py-5 px-6",
  margin = "",
  radiuse = "rounded-[4px]",
  href = "",
  isLoading = false,
  disabled = false, // NEW
  className = "",
  icon,
  onClick,
  variant,
  style,
  type = "button",
}) => {
  const isDisabled = Boolean(disabled || isLoading);

  // Avoid invoking onClick while disabled
  const handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined =
    isDisabled ? undefined : onClick;

  return (
    <Button
      type={type}
      style={style}
      variant={variant}
      onClick={handleClick}
      disabled={isDisabled}
      aria-disabled={isDisabled || undefined}
      aria-busy={isLoading || undefined}
      className={clsx(
        "relative cursor-pointer text-sm text-white font-normal bg-primary flex items-center justify-center transition-all duration-300",
        className,
        padding,
        margin,
        radiuse,
        isDisabled && "opacity-70 cursor-not-allowed pointer-events-none" // ensure nested link can't be clicked
      )}
    >
      {/* Optional leading icon (hidden while loading for visual clarity if you prefer) */}
      {icon}

      {/* Centered spinner */}
      <span
        className={clsx(
          "ml-2 absolute inset-0 flex items-center justify-center transition-opacity duration-300",
          isLoading ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <AiOutlineLoading3Quarters className="animate-spin text-white text-lg" />
      </span>

      {/* Button text / link */}
      <span
        className={clsx(
          "transition-opacity duration-300",
          isLoading && "opacity-0"
        )}
      >
        {href && !isDisabled ? (
          // If you use shadcn/ui, consider <Button asChild><Link .../></Button> in future
          <Link href={href}>{btnText}</Link>
        ) : (
          btnText
        )}
      </span>
    </Button>
  );
};

export default SRSButton;
