export type TProduct = {
  id: string;
  title: string;
  description: string;
  categoryId: string | null;
  thumbnail: string;
  price: {
    original: number | null;
    converted: number | null;
    display: string;
    currency: string;
    sign: string;
  };
  quantity: number;
  vendor: {
    id: string;
    name: string;
    displayName: string;
    score: number;
  };
  images: string[];
  stats: {
    totalSales: number;
    salesLast30Days: number;
    rating: number;
  };
  location: string | null;
};

export type TSidebarItem = {
  id: string;
  title: string;
  icon: { src: string };
  submenu: {
    id: string;
    title: string;
    url: string;
  }[];
};