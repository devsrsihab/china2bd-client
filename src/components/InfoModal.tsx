import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SRSButton from "./SRSButton";

interface InfoModalProps {
  title: string;
  content: {
    items: {
      mainText: string;
      subText?: string;
      subTextColor?: string;
    }[];
  };
  open: boolean;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({
  title = "Delivery & Courier Charges",
  content = {
    items: [
      {
        mainText: "Delivery Charge: ৳710/ ৳1120 Per Kg",
        subText:
          "পণ্য বাংলাদেশে আসার পর পণ্যের ক্যাটাগরীর উপর নির্ভর করে চূড়ান্ত শিপিং চার্জ নির্ধারণ করা হবে।",
        subTextColor: "text-red-600",
      },
      {
        mainText: "China Courier Charge",
      },
    ],
  },
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg">{title}</DialogTitle>
        </DialogHeader>

        <div className="p-4">
          <ul className="list-disc pl-6 space-y-3">
            {content.items.map((item, index) => (
              <li key={index} className="mb-2 last:mb-0">
                <p className="text-sm">{item.mainText}</p>
                {item.subText && (
                  <p
                    className={`text-xs mt-1 ${
                      item.subTextColor || "text-gray-600"
                    }`}
                  >
                    {item.subText}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end p-4 pt-0">
          <SRSButton
            btnText="OK"
            onClick={onClose}
            padding="px-6 py-2"
            radiuse="rounded"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
