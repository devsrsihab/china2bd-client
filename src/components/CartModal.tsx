"use client";
import React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import SRSButton from "./SRSButton";

type CartModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isQtyEnough: boolean;
  onShopMore?: () => void;
  onOk?: () => void;
};

const CartModal: React.FC<CartModalProps> = ({
  open,
  onOpenChange,
  isQtyEnough,
  onShopMore,
  onOk,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isQtyEnough ? "Added to cart" : "Minimum Quantity 3 piece"}
          </DialogTitle>
          <DialogDescription className="py-4">
            {isQtyEnough
              ? "Product added to cart successfully."
              : "পণ্যটি সর্বনিম্ন ৩ পিস অর্ডার করতে হবে"}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          {isQtyEnough ? (
            <>
              <Link href="/cart">
                <SRSButton btnText="Go to Cart" />
              </Link>
              <SRSButton
                variant="outline"
                onClick={onShopMore}
                btnText="Shop More"
              />
            </>
          ) : (
            <SRSButton onClick={onOk} btnText="Ok" />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
