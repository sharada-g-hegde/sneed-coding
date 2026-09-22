"use client";

import { useState } from "react";
import {
  Minus,
  Plus,
  Trash2,
  ChevronDown,
  ShoppingCart,
  X,
} from "lucide-react";

import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Media from "@/components/elements/media";
import { cn } from "@/utils";

interface CartItem {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
  image: string;
}

const INITIAL_ITEMS: CartItem[] = [
  {
    id: "titan",
    name: "SNEED-JET® Titan",
    unitPrice: 279.95,
    quantity: 5,
    image: "/images/product-titan.jpg",
  },
  {
    id: "titan-t6",
    name: "SNEED-JET® Titan T6 Handheld Printer",
    unitPrice: 279.95,
    quantity: 1,
    image: "/images/product-titan-t6.jpg",
  },
];

const STATES = ["New York", "California", "Texas", "Florida"];

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);
  const [state, setState] = useState(STATES[0]);
  const [specialInstructions, setSpecialInstructions] = useState(false);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <Container
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <Container
        className={cn(
          "fixed z-50 flex flex-col bg-white transition-transform duration-300 ease-in-out",

          "inset-x-0 bottom-0 max-h-[88vh] rounded-t-[28px]",

          open ? "translate-y-0" : "translate-y-full",

          "lg:inset-y-0 lg:right-0 lg:left-auto lg:bottom-auto lg:h-full lg:max-h-none lg:w-[420px] lg:rounded-t-none lg:shadow-2xl",

          open ? "lg:translate-x-0" : "lg:translate-x-full",
        )}
      >
        <Container className="shrink-0 items-center justify-center pt-3 lg:hidden">
          <Container className="h-1.5 w-10 rounded-full bg-[#D9D9D9]" />
        </Container>

        <Container className="shrink-0 items-center justify-between border-b border-[#EDEDED] px-5 py-5 lg:px-6">
          <Container className="items-center gap-2">
            <Typography className="m-0 font-outfit text-[28px] font-bold leading-none text-[#24232D]">
              Cart
            </Typography>

            <Container className="h-9 min-w-9 items-center justify-center rounded-full bg-[#E7E7E7] px-2">
              <Typography className="m-0 text-[15px] font-semibold text-[#5E5C66]">
                {itemCount}
              </Typography>
            </Container>
          </Container>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-9 w-9 cursor-pointer items-center justify-center text-[#5E5C66] transition-colors hover:text-[#24232D]"
          >
            <X size={28} strokeWidth={1.8} />
          </button>
        </Container>

        {itemCount === 0 ? (
          <Container className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
            {/* Cart icon */}
            <Container className="mb-8 h-20 w-20 items-center justify-center rounded-full bg-[#F1EFEA]">
              <ShoppingCart
                size={32}
                strokeWidth={2}
                className="text-[#B51D1D]"
              />
            </Container>

            <Typography className="m-0 font-outfit text-[24px] font-bold leading-tight text-[#5A5863]">
              Your cart is empty
            </Typography>

            <Typography className="mt-4 max-w-117.5 text-[17px] leading-[1.45] text-[#85838B]">
              Looks like you haven&apos;t added anything to your cart yet.
              <br />
              Sneed-Jet markers and printers are ready to boost your production
              line.
            </Typography>

            {/* Browse products */}
            <button
              type="button"
              className="mt-8 cursor-pointer rounded-full bg-[#B51D1D] px-8 py-4 font-outfit text-[17px] font-bold text-white transition-colors hover:bg-[#991818]"
            >
              Browse products
            </button>
          </Container>
        ) : (
          <>
            <Container
              component="div"
              className="flex-1 flex-col overflow-y-auto px-5 pb-5 pt-4 lg:px-6 lg:pt-6"
            >
              <Container className="flex-col">
                {items.map((item, index) => (
                  <Container
                    key={item.id}
                    className={cn(
                      "items-start gap-3 py-4",
                      index < items.length - 1 && "border-b border-[#EDEDED]",
                    )}
                  >
                    <Container className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#F3F1EC]">
                      <Media
                        src={item.image}
                        alt={item.name}
                        fill
                        className="absolute inset-0 h-full w-full object-contain p-2"
                      />
                    </Container>

                    <Container className="flex-1 flex-col gap-1">
                      <Container className="items-start justify-between gap-2">
                        <Typography className="m-0 text-[15px] font-semibold leading-snug text-[#24232D]">
                          {item.name}
                        </Typography>

                        <Typography className="shrink-0 text-[15px] font-bold text-[#9B1B32]">
                          ${(item.unitPrice * item.quantity).toFixed(2)}
                        </Typography>
                      </Container>

                      <Typography className="m-0 text-[13px] text-gray-500">
                        ${item.unitPrice.toFixed(2)} / item
                      </Typography>

                      <Container className="mt-2 items-center justify-between">
                        <Container className="items-center gap-3 rounded-full border border-[#E7E7EA] px-3 py-1.5">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="flex h-5 w-5 cursor-pointer items-center justify-center text-gray-500 hover:text-[#24232D]"
                          >
                            <Minus size={14} />
                          </button>

                          <Typography className="w-4 text-center text-[14px] font-semibold text-[#24232D]">
                            {item.quantity}
                          </Typography>

                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="flex h-5 w-5 cursor-pointer items-center justify-center text-gray-500 hover:text-[#24232D]"
                          >
                            <Plus size={14} />
                          </button>
                        </Container>

                        <button
                          type="button"
                          aria-label="Remove item"
                          onClick={() => removeItem(item.id)}
                          className="flex h-8 w-8 cursor-pointer items-center justify-center text-gray-400 hover:text-[#9B1B32]"
                        >
                          <Trash2 size={17} />
                        </button>
                      </Container>
                    </Container>
                  </Container>
                ))}
              </Container>

              <Container className="mt-2 flex-col border-t border-[#EDEDED] pt-5">
                <Typography className="m-0 font-outfit text-[17px] font-bold text-[#24232D]">
                  Order details
                </Typography>

                <Container className="mt-4 flex-col gap-2">
                  <Typography className="m-0 text-[14px] text-[#24232D]">
                    Select your state
                  </Typography>

                  <Container className="relative">
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full cursor-pointer appearance-none rounded-full border border-[#E7E7EA] bg-white px-5 py-3.5 text-[14px] text-[#24232D] focus:outline-none focus:ring-2 focus:ring-[#9B1B32]/30"
                    >
                      {STATES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </Container>
                </Container>

                <Container className="mt-5 items-center justify-between">
                  <Typography className="m-0 text-[15px] text-[#24232D]">
                    Special instructions
                  </Typography>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={specialInstructions}
                    onClick={() => setSpecialInstructions((prev) => !prev)}
                    className={cn(
                      "relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200",
                      specialInstructions ? "bg-[#9B1B32]" : "bg-[#E7E7EA]",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200",
                        specialInstructions
                          ? "translate-x-5.5"
                          : "translate-x-0.5",
                      )}
                    />
                  </button>
                </Container>
              </Container>

              <Container className="mt-5 flex-col border-t border-[#EDEDED] pt-5">
                <Container className="items-center justify-between">
                  <Typography className="m-0 font-outfit text-[16px] font-bold text-[#24232D]">
                    Subtotal
                  </Typography>

                  <Typography className="m-0 text-[17px] font-bold text-[#9B1B32]">
                    ${subtotal.toFixed(2)}
                  </Typography>
                </Container>

                <Typography className="m-0 mt-1 text-[13px] text-gray-500">
                  Taxes, discounts and shipping calculated at checkout
                </Typography>
              </Container>
            </Container>

            <Container className="shrink-0 items-center gap-3 border-t border-[#EDEDED] px-5 py-4">
              <button
                type="button"
                className="flex-1 cursor-pointer rounded-full border border-[#9B1B32] py-3.5 text-[15px] font-semibold text-[#9B1B32] transition-colors hover:bg-[#9B1B32] hover:text-white"
              >
                View cart
              </button>

              <button
                type="button"
                className="flex-1 cursor-pointer rounded-full bg-[#9B1B32] py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#7f1628]"
              >
                Checkout
              </button>
            </Container>
          </>
        )}
      </Container>
    </>
  );
}
