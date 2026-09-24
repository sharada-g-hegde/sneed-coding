import BentoCardGrid from "../bento-card-grid";

const INDUSTRIES = [
  {
    id: "Lot Coding",
    label: "Lot Coding",
    image: "/images/date-coding-9.webp",
    description:
      "Labels and packaging built to survive ice baths, condensation and cold-chain handling without lifting or fading.",
  },
  {
    id: "Batch Coding",
    label: "Batch Coding",
    image: "/images/date-coding-10.webp",
    description:
      "Tamper-evident, chemical-resistant materials that meet regulatory traceability requirements batch after batch.",
  },
  {
    id: "Expiration Date Printing",
    label: "Expiration Date Printing",
    image: "/images/date-coding-11.webp",
    description:
      "Premium finishes and foil detailing that hold up on the shelf and feel right in the hand.",
  },
  {
    id: "Production Date Marking",
    label: "Production Date Marking",
    image: "/images/date-coding-12.webp",
    description:
      "Durable identification that withstands heat, oil, abrasion and repeated handling on the floor.",
  },
];

export default function DateCodingGrid() {
  return <BentoCardGrid heading="Related Applications" items={INDUSTRIES} />;
}
