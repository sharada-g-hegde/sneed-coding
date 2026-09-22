// "use client";

// import { LogOut, ChevronRight } from "lucide-react";
// import Container from "@/components/elements/container";
// import Typography from "@/components/elements/typography";
// import { cn } from "@/utils";
// import Navbar from "@/components/layout/navbar";
// import Footer from "@/components/layout/footer";

// interface Order {
//   id: string;
//   item: string;
//   date: string;
//   payment: "Paid" | "Refunded";
//   fulfillment: "Fulfilled" | "Unfulfilled";
//   total: string;
//   image?: string;
// }

// const ORDERS: Order[] = [
//   {
//     id: "#SN-98241",
//     item: "1x SNEED-JET® Titan T6 Handheld Printer",
//     date: "Oct 12, 2026",
//     payment: "Paid",
//     fulfillment: "Fulfilled",
//     total: "$1,279.95",
//   },
//   {
//     id: "#SN-97150",
//     item: "2x Sneed Black Premium Ink Cartridge",
//     date: "Sep 28, 2026",
//     payment: "Paid",
//     fulfillment: "Fulfilled",
//     total: "$279.95",
//   },
//   {
//     id: "#SN-95412",
//     item: "1x SNEED-JET® Freedom Industrial Coder",
//     date: "Aug 14, 2026",
//     payment: "Paid",
//     fulfillment: "Unfulfilled",
//     total: "$3,150.00",
//   },
// ];

// function StatusPill({
//   label,
// }: {
//   label: Order["payment"] | Order["fulfillment"];
// }) {
//   const isPositive = label === "Paid" || label === "Fulfilled";
//   return (
//     <span
//       className={cn(
//         "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium",
//         isPositive
//           ? "bg-[#E7F5EC] text-[#1E8A4C]"
//           : "bg-[#FBF0DD] text-[#B4770F]",
//       )}
//     >
//       <span
//         className={cn(
//           "h-1.5 w-1.5 rounded-full",
//           isPositive ? "bg-[#1E8A4C]" : "bg-[#B4770F]",
//         )}
//       />
//       {label}
//     </span>
//   );
// }

// export default function AccountPage() {
//   return (
//     <>
//       <Navbar />
//       <Container className="flex-col bg-white mt-10 lg:mt-15 px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
//         <Container width="fullWidth" className="mx-auto max-w-325 flex-col">
//           <Container width="fullWidth" className="items-center justify-between">
//             <Typography className="m-0 font-outfit lg:text-[36px] font-bold leading-tight text-[#24232D] text-[26px]">
//               Your account
//             </Typography>

//             <button
//               type="button"
//               className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-[#9B1B32] px-4 py-2 text-[13px] font-semibold text-[#9B1B32] transition-colors hover:bg-[#9B1B32] hover:text-white sm:text-[14px]"
//             >
//               <LogOut size={14} />
//               Log out
//             </button>
//           </Container>

//           {/* Desktop / tablet layout */}
//           <Container
//             width="fullWidth"
//             className="mt-8 hidden gap-6 lg:grid lg:grid-cols-[1fr_360px]"
//           >
//             {/* Order history card */}
//             <Container className="flex-col rounded-2xl border border-[#E7E7EA] p-6">
//               <Typography className="m-0 font-outfit text-[18px] font-bold text-[#24232D]">
//                 Order history
//               </Typography>

//               <Container className="mt-5 items-center gap-4 border-b border-[#EDEDED] pb-3 lg:pb-20">
//                 <Typography className="w-[38%] text-[12px] font-medium text-gray-400">
//                   Order details
//                 </Typography>
//                 <Typography className="w-[16%] text-[12px] font-medium text-gray-400">
//                   Date
//                 </Typography>
//                 <Typography className="w-[15%] text-[12px] font-medium text-gray-400">
//                   Payment
//                 </Typography>
//                 <Typography className="w-[17%] text-[12px] font-medium text-gray-400">
//                   Fulfillment
//                 </Typography>
//                 <Typography className="flex-1 text-right text-[12px] font-medium text-gray-400">
//                   Total
//                 </Typography>
//               </Container>

//               <Container className="flex-col">
//                 {ORDERS.map((order) => (
//                   <Container
//                     key={order.id}
//                     className="items-center gap-4 border-b border-[#EDEDED] py-4 last:border-b-0"
//                   >
//                     <Container className="w-[38%] flex-col gap-0.5">
//                       <Typography className="m-0 text-[14px] font-semibold text-[#9B1B32]">
//                         {order.id}
//                       </Typography>
//                       <Typography className="m-0 text-[13px] leading-snug text-gray-500">
//                         {order.item}
//                       </Typography>
//                     </Container>

//                     <Typography className="w-[16%] text-[13px] text-gray-500">
//                       {order.date}
//                     </Typography>

//                     <Container className="w-[15%]">
//                       <StatusPill label={order.payment} />
//                     </Container>

//                     <Container className="w-[17%]">
//                       <StatusPill label={order.fulfillment} />
//                     </Container>

//                     <Container className="flex-1 items-center justify-end gap-4">
//                       <Typography className="text-[14px] font-semibold text-[#24232D]">
//                         {order.total}
//                       </Typography>
//                       <Container className="h-11 w-11 shrink-0 rounded-full bg-[#EFEDE7]" />
//                     </Container>
//                   </Container>
//                 ))}
//               </Container>
//             </Container>

//             {/* Account details card */}
//             <Container className="h-fit flex-col rounded-2xl border border-[#E7E7EA] p-6">
//               <Typography className="m-0 font-outfit text-[18px] font-bold text-[#24232D]">
//                 Account details
//               </Typography>

//               <Container className="mt-5 items-center gap-3">
//                 <Container className="h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFEDE7] text-[#9B1B32]">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     className="h-5 w-5"
//                   >
//                     <circle cx="12" cy="8" r="4" />
//                     <path
//                       d="M4 20c0-4 3.6-6 8-6s8 2 8 6"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </Container>
//                 <Container className="flex-col">
//                   <Typography className="m-0 text-[14px] font-semibold text-[#24232D]">
//                     John Smith
//                   </Typography>
//                   <Typography className="m-0 text-[13px] text-gray-500">
//                     john@company.com
//                   </Typography>
//                 </Container>
//               </Container>

//               <Container className="mt-6 flex-col gap-1">
//                 <Typography className="m-0 text-[11px] font-medium tracking-wide text-gray-400">
//                   Primary address
//                 </Typography>
//                 <Typography className="m-0 text-[14px] leading-relaxed text-[#24232D]">
//                   Sneed Coding Solutions
//                   <br />
//                   22315 Gosling Road
//                   <br />
//                   Spring, TX 77389
//                 </Typography>
//               </Container>

//               <button
//                 type="button"
//                 className="mt-6 w-full cursor-pointer rounded-full bg-[#9B1B32] py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#7f1628]"
//               >
//                 View addresses (1)
//               </button>
//             </Container>
//           </Container>

//           {/* Mobile layout */}
//           <Container
//             width="fullWidth"
//             className="mt-6 flex-col gap-6 lg:hidden"
//           >
//             {/* Account details first — orients the person before order history */}
//             <Container className="flex-col rounded-2xl border border-[#E7E7EA] p-5">
//               <Container className="items-center gap-3">
//                 <Container className="h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFEDE7] text-[#9B1B32]">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     className="h-5 w-5"
//                   >
//                     <circle cx="12" cy="8" r="4" />
//                     <path
//                       d="M4 20c0-4 3.6-6 8-6s8 2 8 6"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </Container>
//                 <Container className="flex-col">
//                   <Typography className="m-0 text-[15px] font-semibold text-[#24232D]">
//                     John Smith
//                   </Typography>
//                   <Typography className="m-0 text-[13px] text-gray-500">
//                     john@company.com
//                   </Typography>
//                 </Container>
//               </Container>

//               <Container className="mt-4 flex-col gap-1 border-t border-[#EDEDED] pt-4">
//                 <Typography className="m-0 text-[11px] font-medium text-gray-400">
//                   Primary address
//                 </Typography>
//                 <Typography className="m-0 text-[14px] leading-relaxed text-[#24232D]">
//                   Sneed Coding Solutions
//                   <br />
//                   22315 Gosling Road
//                   <br />
//                   Spring, TX 77389
//                 </Typography>
//               </Container>

//               <button
//                 type="button"
//                 className="mt-4 w-full cursor-pointer rounded-full bg-[#9B1B32] py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#7f1628]"
//               >
//                 View addresses (1)
//               </button>
//             </Container>

//             {/* Order history as stacked cards */}
//             <Container className="flex-col">
//               <Typography className="m-0 mb-3 font-outfit text-[16px] font-bold text-[#24232D]">
//                 Order history
//               </Typography>

//               <Container className="flex-col gap-3">
//                 {ORDERS.map((order) => (
//                   <Container
//                     key={order.id}
//                     className="flex-col gap-3 rounded-2xl border border-[#E7E7EA] p-4"
//                   >
//                     <Container className="items-start justify-between gap-3">
//                       <Container className="items-center gap-3">
//                         <Container className="h-12 w-12 shrink-0 rounded-xl bg-[#EFEDE7]" />
//                         <Container className="flex-col gap-0.5">
//                           <Typography className="m-0 text-[13px] font-semibold text-[#9B1B32]">
//                             {order.id}
//                           </Typography>
//                           <Typography className="m-0 max-w-[180px] text-[12.5px] leading-snug text-gray-500">
//                             {order.item}
//                           </Typography>
//                         </Container>
//                       </Container>

//                       <Typography className="shrink-0 text-[14px] font-semibold text-[#24232D]">
//                         {order.total}
//                       </Typography>
//                     </Container>

//                     <Container className="items-center justify-between border-t border-[#EDEDED] pt-3">
//                       <Typography className="text-[12.5px] text-gray-500">
//                         {order.date}
//                       </Typography>
//                       <Container className="items-center gap-2">
//                         <StatusPill label={order.payment} />
//                         <StatusPill label={order.fulfillment} />
//                       </Container>
//                     </Container>
//                   </Container>
//                 ))}
//               </Container>
//             </Container>
//           </Container>
//         </Container>
//       </Container>
//       <Footer />
//     </>
//   );
// }
"use client";

import { LogOut } from "lucide-react";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import { cn } from "@/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "@/components/elements/link";

interface Order {
  id: string;
  item: string;
  date: string;
  payment: "Paid" | "Refunded";
  fulfillment: "Fulfilled" | "Unfulfilled";
  total: string;
  image?: string;
}

const ORDERS: Order[] = [
  {
    id: "#SN-98241",
    item: "1x SNEED-JET® Titan T6 Handheld Printer",
    date: "Oct 12, 2026",
    payment: "Paid",
    fulfillment: "Fulfilled",
    total: "$1,279.95",
  },
  {
    id: "#SN-97150",
    item: "2x Sneed Black Premium Ink Cartridge",
    date: "Sep 28, 2026",
    payment: "Paid",
    fulfillment: "Fulfilled",
    total: "$279.95",
  },
  {
    id: "#SN-95412",
    item: "1x SNEED-JET® Freedom Industrial Coder",
    date: "Aug 14, 2026",
    payment: "Paid",
    fulfillment: "Unfulfilled",
    total: "$3,150.00",
  },
];

function StatusPill({
  label,
}: {
  label: Order["payment"] | Order["fulfillment"];
}) {
  const isPositive = label === "Paid" || label === "Fulfilled";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium",
        isPositive
          ? "bg-[#E7F5EC] text-[#1E8A4C]"
          : "bg-[#FBF0DD] text-[#B4770F]",
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          isPositive ? "bg-[#1E8A4C]" : "bg-[#B4770F]",
        )}
      />
      {label}
    </span>
  );
}

function OrderRow({ order }: { order: Order }) {
  return (
    <Container
      className={cn(
        "flex-col gap-3 rounded-2xl border border-[#E7E7EA] p-4", // mobile card
        "lg:flex-row lg:items-center lg:gap-4 lg:rounded-none lg:border-0 lg:border-b lg:border-[#EDEDED] lg:p-0 lg:py-8 lg:last:border-b-0", // desktop row
      )}
    >
      <Container className="items-start justify-between gap-3 lg:w-[38%] lg:items-center lg:justify-start">
        <Container className="items-center gap-3">
          <Container className="h-12 w-12 shrink-0 rounded-xl bg-[#EFEDE7] lg:hidden" />
          <Container className="flex-col gap-0.5">
            <Typography className="m-0 text-[13px] font-bold font-outfit text-[#9B1B32] lg:text-[16px]">
              {order.id}
            </Typography>
            <Typography className="m-0 max-w-45 text-[12.5px] font-inter leading-snug text-gray-500 lg:max-w-[250px] lg:text-[14px]">
              {order.item}
            </Typography>
          </Container>
        </Container>

        <Typography className="shrink-0 text-[14px] font-semibold text-[#24232D] lg:hidden">
          {order.total}
        </Typography>
      </Container>

      <Container className="items-center justify-between border-t border-[#EDEDED] pt-3 lg:w-[16%] lg:border-t-0 lg:pt-0 lg:justify-start">
        <Typography className="text-[12.5px] text-gray-500 lg:text-[13px]">
          {order.date}
        </Typography>

        <Container className="items-center gap-2 lg:hidden">
          <StatusPill label={order.payment} />
          <StatusPill label={order.fulfillment} />
        </Container>
      </Container>

      {/* pills: desktop position (own columns, 15% and 17%) */}
      <Container className="hidden lg:flex lg:w-[15%]">
        <StatusPill label={order.payment} />
      </Container>
      <Container className="hidden lg:flex lg:w-[17%]">
        <StatusPill label={order.fulfillment} />
      </Container>

      {/* total + circular thumbnail: desktop position (flex-1, right-aligned) */}
      <Container className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-4">
        <Typography className="text-[14px] font-semibold text-[#24232D]">
          {order.total}
        </Typography>
        <Container className="xl:h-21 xl:w-21 h-11 w-11 shrink-0 rounded-full bg-[#EFEDE7]" />
      </Container>
    </Container>
  );
}

export default function AccountPage() {
  return (
    <>
      <Navbar />

      <Container className="flex-col bg-white mt-10 lg:mt-15 px-4 py-8 sm:px-8 sm:py-12 xl:px-16 lg:px-8 lg:py-16">
        <Container width="fullWidth" className="mx-auto max-w-325 flex-col">
          {/* Header */}
          <Container width="fullWidth" className="items-center justify-between">
            <Typography className="m-0 font-outfit lg:text-[56px] font-bold leading-tight text-[#24232D] text-[26px]">
              Your account
            </Typography>

            <button
              type="button"
              className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-[#9B1B32] px-4 py-2 text-[13px] font-semibold text-[#9B1B32] transition-colors hover:bg-[#9B1B32] hover:text-white sm:text-[14px]"
            >
              <LogOut size={14} />
              Log out
            </button>
          </Container>

          {/* Content grid — one column stack on mobile, two on desktop */}
          <Container
            width="fullWidth"
            className="mt-6 flex-col gap-6 lg:mt-8 lg:grid xl:grid-cols-[1fr_360px] lg:grid-cols-[1fr_300px]"
          >
            {/* Order history card */}
            <Container className="order-2 flex-col rounded-2xl border border-[#E7E7EA] p-4 lg:order-1 lg:px-6 lg:pt-6 lg:pb-20">
              <Typography className="m-0 mb-3 font-outfit text-[16px] font-bold text-[#24232D] lg:mb-0 lg:text-[24px]">
                Order history
              </Typography>

              {/* Column header row — desktop only, mobile cards label themselves inline */}
              <Container className="mt-5 hidden items-center lg:gap-0 gap-4 border-b-3 border-[#EDEDED] pb-3 lg:flex lg:pb-20">
                <Typography className="w-[38%] uppercase lg:text-[14px] text-[12px] font-medium text-gray-400">
                  Order details
                </Typography>
                <Typography className="w-[16%] text-[12px] font-medium text-gray-400">
                  Date
                </Typography>
                <Typography className="w-[15%] text-[12px] font-medium text-gray-400">
                  Payment
                </Typography>
                <Typography className="w-[17%] text-[12px] font-medium text-gray-400">
                  Fulfillment
                </Typography>
                <Typography className="flex-1 text-right text-[12px] font-medium text-gray-400">
                  Total
                </Typography>
              </Container>

              <Container className="flex-col gap-3 lg:gap-0">
                {ORDERS.map((order) => (
                  <OrderRow key={order.id} order={order} />
                ))}
              </Container>
            </Container>

            {/* Account details card */}
            <Container className="order-1 h-fit flex-col rounded-2xl border border-[#E7E7EA] p-5 lg:order-2 lg:p-6">
              {/* Heading only ever existed on desktop in the original — preserved as-is */}
              <Typography className="m-0 hidden font-outfit lg:text-[24px] font-bold text-[#24232D] lg:block">
                Account details
              </Typography>

              <Container className="items-center gap-3 lg:mt-5">
                <Container className="h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFEDE7] text-[#9B1B32] lg:h-10 lg:w-10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path
                      d="M4 20c0-4 3.6-6 8-6s8 2 8 6"
                      strokeLinecap="round"
                    />
                  </svg>
                </Container>
                <Container className="flex-col">
                  <Typography className="m-0 text-[15px] font-outfit font-semibold text-[#24232D] lg:text-[20px]">
                    John Smith
                  </Typography>
                  <Typography className="m-0 font-inter text-[13px] text-gray-500">
                    john@company.com
                  </Typography>
                </Container>
              </Container>

              <Container className="mt-4 flex-col gap-1 border-t border-[#EDEDED] pt-4 lg:mt-6 lg:border-t-0 lg:pt-0">
                <Typography className="m-0 text-[11px] lg:text-[12px] uppercase font-bold text-gray-500 lg:tracking-wide">
                  Primary address
                </Typography>
                <Typography className="lg:mt-2 text-[14px] font-inter lg:leading-7 leading-relaxed text-[#24232D]">
                  Sneed Coding Solutions
                  <br />
                  22315 Gosling Road
                  <br />
                  Spring, TX 77389
                </Typography>
              </Container>

              <Link
                variant="Link"
                href="/accountPage"
                className="mt-4 w-full justify-center cursor-pointer rounded-full bg-[#9B1B32] py-3 text-[14px] font-semibold text-white transition-colors font-outfit hover:bg-[#7f1628] lg:mt-6"
              >
                View addresses (1)
              </Link>
            </Container>
          </Container>
        </Container>
      </Container>

      <Footer />
    </>
  );
}
