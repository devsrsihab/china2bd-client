export type TProduct = {
  code: string;
  title: string;
  regular_price: number;
  sale_price: number | null;
  thumbnail: {
    large: string;
    medium: string;
    small: string;
  };
  meta: {
    total_sold: number;
  };
};
