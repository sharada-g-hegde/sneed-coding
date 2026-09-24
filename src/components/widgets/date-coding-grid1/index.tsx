import BentoCardGrid from "../bento-card-grid";

const SUBSTRATES = [
  {
    id: "plastic",
    label: "Plastic",
    image: "/images/date-coding-1.webp",
    description:
      "Consistent adhesion and clean coding on bottles, tubs and pump bottles without smudging or lifting.",
  },
  {
    id: "glass",
    label: "Glass",
    image: "/images/date-coding-2.webp",
    description:
      "Crisp, permanent codes on glass bottles and vials, calibrated for condensation and curved surfaces.",
  },
  {
    id: "aluminum",
    label: "Aluminum",
    image: "/images/date-coding-3.webp",
    description:
      "High-contrast codes on cans and metal containers that hold up through cold-chain handling and transit.",
  },
  {
    id: "cardboard-paperboard",
    label: "Cardboard & Paperboard",
    image: "/images/date-coding-4.webp",
    description:
      "Large-character carton and case marking that stays legible through warehouse handling and storage.",
  },
];

export default function SubstratesSection() {
  return (
    <BentoCardGrid
      heading="Common Substrates for Date Coding"
      items={SUBSTRATES}
    />
  );
}
