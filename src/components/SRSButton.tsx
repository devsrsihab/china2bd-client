import React from "react";
import { Button } from "./ui/button";
import clsx from "clsx"; // Optional: helps with conditional classNames
import Link from "next/link";

type SRButtonProps = {
  btnText: string;
  padding?: string;
  margin?: string;
  radiuse?: string;
  href?: string;
};

const SRSButton: React.FC<SRButtonProps> = ({
  btnText,
  padding = "py-5 px-6", // default padding
  margin = "", // optional margin
  radiuse = "rounded-[4px]", // default border radius
  href = "",
}) => {
  return (
    <Button
      className={clsx(
        "text-sm text-white font-normal bg-primary", // common styles
        padding,
        margin,
        radiuse
      )}
    >
      {href ? <Link href={href}>{btnText}</Link> : btnText}
    </Button>
  );
};

export default SRSButton;
