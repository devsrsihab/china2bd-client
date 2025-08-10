import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SRSButton from "./SRSButton";

interface EditQuantityModalProps {
  item: {
    variantName?: string;
    size?: string;
    unitPrice: number;
    currentQuantity: number;
  };
  open: boolean;
  onClose: () => void;
  onUpdate: (newQuantity: number) => void;
  onDelete: () => void;
}

const EditQuantityModal: React.FC<EditQuantityModalProps> = ({
  item,
  open,
  onClose,
  onUpdate,
  onDelete,
}) => {
  const [quantity, setQuantity] = useState(item.currentQuantity);
  const subtotal = quantity * item.unitPrice;

  const handleQuantityChange = (newValue: number) => {
    if (newValue < 1) return;
    setQuantity(newValue);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium">
            Edit Quantity
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <FiX className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <div className="p-4">
          {/* Variant Info */}
          <div className="flex flex-col mb-4">
            {item.variantName && (
              <span className="text-sm mb-1">{item.variantName}</span>
            )}
            {item.size && <span className="text-sm">{item.size}</span>}
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1">
              {item.variantName && (
                <span className="text-sm">{item.variantName}</span>
              )}
              {item.size && <span className="text-sm block">{item.size}</span>}
            </div>

            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  handleQuantityChange(parseInt(e.target.value) || 1)
                }
                className="w-20 h-7 mx-2 border border-gray-300 text-center"
                min="1"
              />
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-4">
            <span className="bg-gray-100 px-2 py-0.5 rounded text-sm mr-2">
              Total Items: {quantity}
            </span>
            <span className="bg-gray-100 px-3 py-0.5 rounded text-sm">
              Subtotal: ৳{subtotal.toLocaleString()}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <SRSButton
              btnText="Delete"
              onClick={onDelete}
              variant="destructive"
              padding="px-4 py-2"
              radiuse="rounded"
              className="bg-red-600 hover:bg-red-700"
            />
            <div className="flex space-x-3">
              <SRSButton
                btnText="Cancel"
                onClick={onClose}
                variant="secondary"
                padding="px-4 py-2"
                radiuse="rounded"
                className="bg-gray-400 hover:bg-gray-500"
              />
              <SRSButton
                btnText="Update"
                onClick={() => onUpdate(quantity)}
                padding="px-4 py-2"
                radiuse="rounded"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditQuantityModal;
