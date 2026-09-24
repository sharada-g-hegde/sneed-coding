import BentoCardGrid from "../bento-card-grid";

const INDUSTRIES = [
  {
    id: "food-beverage",
    label: "Food & Beverage",
    image: "/images/date-coding-5.webp",
    description:
      "Labels and packaging built to survive ice baths, condensation and cold-chain handling without lifting or fading.",
  },
  {
    id: "pharmaceutical",
    label: "Pharmaceutical",
    image: "/images/date-coding-6.webp",
    description:
      "Tamper-evident, chemical-resistant materials that meet regulatory traceability requirements batch after batch.",
  },
  {
    id: "cosmetics",
    label: "Cosmetics",
    image: "/images/date-coding-7.webp",
    description:
      "Premium finishes and foil detailing that hold up on the shelf and feel right in the hand.",
  },
  {
    id: "industrial",
    label: "Industrial Manufacturing",
    image: "/images/date-coding-8.webp",
    description:
      "Durable identification that withstands heat, oil, abrasion and repeated handling on the floor.",
  },
];

export default function IndustriesSection() {
  return (
    <BentoCardGrid heading="Industries Using Date Coding" items={INDUSTRIES} />
  );
}
