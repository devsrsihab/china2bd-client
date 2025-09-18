import shoeIcon from "@/assets/icons/category/Shoes.png";
import bagIcon from "@/assets/icons/category/bag.png";
import beautyProductIcon from "@/assets/icons/category/Beauty-Products.png";
import jewelryIcon from "@/assets/icons/category/jewelry.png";
import mensClothingIcon from "@/assets/icons/category/Men_s-Clothing.png";
import womanClothesIcon from "@/assets/icons/category/Women_s-clothing.png";
import babyItemIcon from "@/assets/icons/category/Baby-Items.png";
import eyewearIcon from "@/assets/icons/category/Eyewear.png";
import officeSuppliesIcon from "@/assets/icons/category/Office-Supplies.png";
import seasonalProductIcon from "@/assets/icons/category/Seasonal-Products.png";
import phoneAccessoriesIcon from "@/assets/icons/category/Phone-Accessories.png";
import sportIcon from "@/assets/icons/category/Sports-And-Fitness.png";
import entertainmentIcon from "@/assets/icons/category/Entertainment-Items.png";
import watchesIcon from "@/assets/icons/category/Watches.png";
import automobileItemsIcon from "@/assets/icons/category/Automobile-Items.png";
import groceriesIcon from "@/assets/icons/category/Groceries-And-Pets.png";
import outdoorIcon from "@/assets/icons/category/Outdoor-And-Travelling.png";
import electronicsIcon from "@/assets/icons/category/ElectronicsAnd-Gadgets.png";
import kitchenIcon from "@/assets/icons/category/Kitchen-Gadgets.png";
import toolsIcon from "@/assets/icons/category/Tools-Home.png";
import schoolSuppliesIcon from "@/assets/icons/category/School-Supplies.png";
type CategoryItem = {
    name: string;
    icon: any;
    priceFrom: number;
  };


export const categorCarouselItems: CategoryItem[] = [
    { name: "Shoes", icon: shoeIcon, priceFrom: 70 },
    { name: "Bag", icon: bagIcon, priceFrom: 50 },
    { name: "Beauty Products", icon: beautyProductIcon, priceFrom: 20 },
    { name: "Jewelry", icon: jewelryIcon, priceFrom: 100 },
    { name: "Men's Clothing", icon: mensClothingIcon, priceFrom: 200 },
    { name: "Women's Clothing", icon: womanClothesIcon, priceFrom: 150 },
    { name: "Baby Items", icon: babyItemIcon, priceFrom: 30 },
    { name: "Eyewear", icon: eyewearIcon, priceFrom: 70 },
    { name: "Office Supplies", icon: officeSuppliesIcon, priceFrom: 35 },
    { name: "Seasonal Products", icon: seasonalProductIcon, priceFrom: 25 },
    { name: "Phone Accessories", icon: phoneAccessoriesIcon, priceFrom: 15 },
    { name: "Sports And Fitness", icon: sportIcon, priceFrom: 40 },
    { name: "Entertainment Items", icon: entertainmentIcon, priceFrom: 60 },
    { name: "Watches", icon: watchesIcon, priceFrom: 90 },
    { name: "Automobile Items", icon: automobileItemsIcon, priceFrom: 300 },
    { name: "Groceries And Pets", icon: groceriesIcon, priceFrom: 10 },
    { name: "Outdoor And Travelling", icon: outdoorIcon, priceFrom: 120 },
    { name: "Electronics And Gadgets", icon: electronicsIcon, priceFrom: 500 },
    { name: "Kitchen Gadgets", icon: kitchenIcon, priceFrom: 45 },
    { name: "Tools & Home", icon: toolsIcon, priceFrom: 80 },
    { name: "School Supplies", icon: schoolSuppliesIcon, priceFrom: 15 },
  ];