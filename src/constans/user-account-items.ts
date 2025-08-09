import dashboardicon from "@/assets/icons/useraccount/dashboardicon.svg";
import deliveryicon from "@/assets/icons/useraccount/deliveryicon.svg";
import logouticon from "@/assets/icons/useraccount/logouticon.svg";
import ordericon from "@/assets/icons/useraccount/ordericon.svg";
import paymenticon from "@/assets/icons/useraccount/paymenticon.svg";
import pointsicon from "@/assets/icons/useraccount/pointsicon.svg";
import qcicon from "@/assets/icons/useraccount/qcicon.svg";
import refundsicon from "@/assets/icons/useraccount/refundsicon.svg";
import settingsicon from "@/assets/icons/useraccount/settingsicon.svg";
import supporticon from "@/assets/icons/useraccount/supporticon.svg";

type SidebarItem = {
  title: string;
  url?: string;
  icon: any; // Using 'any' to directly assign the SVG component
  submenu?: {
    title: string;
    url: string;
  }[];
};

export const userAccountSidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: dashboardicon,
    url: "/account/dashboard",
  },
  {
    title: "Orders",
    icon: ordericon,
    url: "/account/orders",
  },
  {
    title: "Payments",
    icon: paymenticon,
    url: "/account/payments",
  },
  {
    title: "QC",
    icon: qcicon,
    url: "/account/qc",
  },
  {
    title: "Support",
    icon: supporticon,
    url: "/account/support",
  },
  {
    title: "Points",
    icon: pointsicon,
    url: "/account/points",
  },
  {
    title: "Delivery",
    icon: deliveryicon,
    url: "/account/delivery",
  },
  {
    title: "Refunds",
    icon: refundsicon,
    url: "/account/refunds",
  },
  {
    title: "Settings",
    icon: settingsicon,
    url: "/account/settings",
  },
  {
    title: "Logout",
    icon: logouticon,
    url: "/account/logout",
  },
];
