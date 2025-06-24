import React from "react";
import { Button } from "./ui/button";
import clsx from "clsx"; // Optional: helps with conditional classNames

type SRButtonProps = {
  btnText: string;
  padding?: string;
  margin?: string;
  radiuse?: string;
};

const SRSButton: React.FC<SRButtonProps> = ({
  btnText,
  padding = "py-5 px-6", // default padding
  margin = "", // optional margin
  radiuse = "rounded-[4px]", // default border radius
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
      {btnText}
    </Button>
  );
};

export default SRSButton;
