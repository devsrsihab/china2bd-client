import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  img: string;
  isLoading: boolean;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ img, isLoading, className }) => {
  return (
    <div className={`w-[180px] h-[45px] relative ${className}`}>
      {/* Skeleton Loader */}
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-md"></div>
      )}

      {/* Logo Image */}
      {!isLoading && (
        <Link href={"/"}>
          <Image
            width={180}
            height={45}
            alt="logo"
            src={img}
            className="w-full h-full object-contain"
            loading={"lazy"}
          />
        </Link>
      )}
    </div>
  );
};

export default Logo;
