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
};

const SRSButton: React.FC<SRButtonProps> = ({
  btnText,
  padding = "py-5 px-6",
  margin = "",
  radiuse = "rounded-[4px]",
  href = "",
  isLoading = false,
}) => {
  return (
    <Button
      disabled={isLoading}
      className={clsx(
        "relative text-sm cursor-pointer text-white font-normal bg-primary flex items-center justify-center transition-all duration-300",
        padding,
        margin,
        radiuse,
        isLoading && "opacity-70 cursor-not-allowed"
      )}
    >
      {/* Spinner in center */}
      <span
        className={clsx(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
          isLoading ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <AiOutlineLoading3Quarters className="animate-spin text-white text-lg" />
      </span>

      {/* Button Text */}
      <span
        className={clsx(
          "transition-opacity duration-300",
          isLoading && "opacity-0"
        )}
      >
        {href ? <Link href={href}>{btnText}</Link> : btnText}
      </span>
    </Button>
  );
};

export default SRSButton;
