"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

// ✅ Props Type
type ProductImageSectionProps = {
  images: string[];
  setSelectedImage: (src: any) => void;
  selectedImage: string;
};

const ProductImageSection: React.FC<ProductImageSectionProps> = ({
  images,
  setSelectedImage,
  selectedImage,
}) => {
  const [selectedDownloads, setSelectedDownloads] = useState<string[]>([]);
  const [isZoomVisible, setIsZoomVisible] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const handleDownload = (src: string, i: number) => {
    fetch(src)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `downloaded-image-${i + 1}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch((err) => console.error("Download failed:", err));
  };

  return (
    <div>
      {/* Thumbnail with Zoom Effect */}
      <div
        ref={imageRef}
        className="relative overflow-hidden max-w-full min-h-[300px] sm:min-h-[400px] md:min-h-[456px] mx-auto"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsZoomVisible(true)}
        onMouseLeave={() => setIsZoomVisible(false)}
      >
        <div className="cursor-crosshair w-full md:min-w-[456px] aspect-square relative select-none mx-auto">
          <Image
            src={selectedImage}
            alt="Product Thumbnail"
            className="w-full h-full object-contain"
            width={456}
            height={456}
          />
          {isZoomVisible && (
            <div
              className="hidden sm:block absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundSize: "200%",
              }}
            ></div>
          )}
        </div>
      </div>

      {/* Sub Images */}
      <div className="flex flex-wrap mt-3 justify-center sm:justify-start">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setSelectedImage(img)}
            className={`cursor-pointer border ${
              selectedImage === img ? "border-[#597445]" : "border-[#ededed]"
            } rounded p-1 w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] mr-2 mb-2`}
          >
            <Image
              src={img}
              alt={`Sub ${i + 1}`}
              width={72}
              height={72}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-[#597445] hover:bg-[#4e653c] text-white">
              Download Images
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Download Images</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Click on image to download
              </p>
            </DialogHeader>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto p-4">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative cursor-pointer group rounded overflow-hidden border border-muted"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    const isSelected = selectedDownloads.includes(img);
                    if (isSelected) {
                      setSelectedDownloads((prev) =>
                        prev.filter((item) => item !== img)
                      );
                    } else {
                      setSelectedDownloads((prev) => [...prev, img]);
                      handleDownload(img, i);
                    }
                  }}
                >
                  <Image
                    src={img}
                    alt={`Modal ${i}`}
                    width={200}
                    height={200}
                    className="w-full h-[120px] object-cover bg-white"
                  />
                  {selectedDownloads.includes(img) && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <CheckCircle2 className="text-green-400 w-10 h-10" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        <Button className="w-full border border-[#597445] text-[#597445] hover:bg-[#f1f1f1] bg-white">
          Original Images
        </Button>
      </div>
    </div>
  );
};

export default ProductImageSection;
