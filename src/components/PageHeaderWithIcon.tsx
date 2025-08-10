import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Image, { ImageProps } from "next/image";

type IconType =
  | React.ReactElement
  | string
  | React.ComponentType<{ className?: string; size?: number }>;

interface PageHeaderWithIconProps {
  variant?: "badge" | "icon";
  count?: number;
  icon?: IconType;
  iconSize?: number;
  imageProps?: Partial<ImageProps>;
  title: string;
  date: string;
  className?: string;
}

const PageHeaderWithIcon: React.FC<PageHeaderWithIconProps> = ({
  variant,
  count,
  icon = <FiShoppingCart />,
  iconSize = 22,
  imageProps,
  title = "Checkout",
  date = "11 August 2025",
  className = "",
}) => {
  const displayMode = variant || (count !== undefined ? "badge" : "icon");

  const renderIcon = () => {
    if (displayMode === "badge" && count !== undefined) {
      return (
        <span className="px-2 py-0.5 bg-teal-700 mr-2 rounded-full text-xs font-bold text-white">
          {count}
        </span>
      );
    }

    if (!icon) return null;

    // Handle string paths (image URLs)
    if (typeof icon === "string") {
      return (
        <div className="mr-2" style={{ width: iconSize, height: iconSize }}>
          <Image
            src={icon}
            alt=""
            width={iconSize}
            height={iconSize}
            {...imageProps}
            className={imageProps?.className || "object-contain"}
          />
        </div>
      );
    }

    // Handle React components
    const iconElement = React.isValidElement(icon)
      ? icon
      : React.createElement(icon as React.ComponentType<any>, {
          size: iconSize,
          className: "w-full h-full",
        });

    return (
      <div
        className="mr-2 text-gray-700 flex items-center justify-center"
        style={{
          width: iconSize,
          height: iconSize,
          fontSize: iconSize,
        }}
      >
        {iconElement}
      </div>
    );
  };

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center mb-2 ${className}`}
    >
      <div className="flex items-center">
        {renderIcon()}
        <h1 className="text-lg font-medium uppercase tracking-wide">{title}</h1>
      </div>
      <span className="text-gray-600 text-sm md:text-base">{date}</span>
    </div>
  );
};

export default PageHeaderWithIcon;
