import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"; // Assuming your Shadcn Card components path
import { Button } from "@/components/ui/button"; // Assuming your Shadcn Button component path
import Link from "next/link"; // Assuming you are using Next.js for routing
import Image from "next/image";
import SRSButton from "./SRSButton";

interface CompanyCardProps {
  imageSrc: string;
  imageAlt: string;
  companyName: string;
  companyDesc?: string;
  href: string; // Link for the "Explore" button
  btnText: string; // Optional button text, default is "Explore {companyName}"
  isHasDesc?: boolean; // Optional prop to control description display
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  imageSrc,
  imageAlt,
  companyName,
  companyDesc,
  href,
  btnText,
  isHasDesc = false, // Default to true if not provided
}) => {
  return (
    <Card
      className="
        rounded-none overflow-hidden flex flex-col items-center justify-center 
        bg-white p-6 md:p-4 gap-4 border-none cursor-pointer 
        transition-all duration-300 ease-in-out hover:shadow-lg
        w-full // Ensures it takes full width within its parent grid/flex item
      "
    >
      <div className="text-center ">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="h-32 w-full object-contain "
          loading="lazy"
          width={223} // Adjust width as needed
          height={128} // Adjust height as needed
        />
      </div>
      <CardHeader className="p-0 text-center flex flex-col items-center space-y-1">
        <CardTitle className="text-xl mt-3 font-light text-black leading-tight">
          {companyName}
        </CardTitle>
        {isHasDesc && (
          <CardDescription className="text-base  text-gray-700 leading-tight">
            {companyDesc}
          </CardDescription>
        )}
      </CardHeader>
      <CardFooter className="p-0  mt-3 flex justify-center">
        {" "}
        {/* pt-3 for mt75 (0.75rem) */}
        <Link href={href} passHref>
          <SRSButton btnText={btnText} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
