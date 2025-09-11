// lib/categoryIcons.ts
import bagIcon from "@/assets/icons/handbag.svg";
import autoMobileIcon from "@/assets/icons/automobile_icon.svg";
import beautyProductIcon from "@/assets/icons/beauty_product.svg";
import babyItemsIcon from "@/assets/icons/baby_items.svg";
import womenClothingIcon from "@/assets/icons/womens_clothing.svg";
import electronicsIcon from "@/assets/icons/electronics.svg";
import kidIcon from "@/assets/icons/kid.svg";
import mensClothingIcon from "@/assets/icons/mens_clothing.svg";
import mobileIcon from "@/assets/icons/mobile.svg";
import necklaceIcon from "@/assets/icons/necklace.svg";
import shoesIcon from "@/assets/icons/shoes.svg";
import sportIcon from "@/assets/icons/sport.svg";
import sunglassIcon from "@/assets/icons/sunglass.svg";
import watchIcon from "@/assets/icons/watch.svg";

export const categoryIcons: Record<string, { src: string }> = {
  Bags: bagIcon,
  Jewelry: necklaceIcon,
  Shoes: shoesIcon,
  "Beauty Products": beautyProductIcon,
  "Mens Clothing": mensClothingIcon,
  "Womens Clothing": womenClothingIcon,
  "Baby Items": babyItemsIcon,
  "Office & School": kidIcon,
  "Seasonal Products": sunglassIcon,
  "Phone accessories": mobileIcon,
  "Sports & Fitness": sportIcon,
  "Entertainment Items": electronicsIcon,
  Watches: watchIcon,
  "Automobile Items": autoMobileIcon,
};
