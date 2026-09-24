import FaqSection from "../faq";
const FAQS = [
  {
    question: "Do you offer bulk discounts for multiple lines?",
    answer:
      "The Titan 500 uses the same core thermal inkjet technology as printers costing $5,000–$10,000+, at a fraction of the price — without sacrificing print quality or speed.",
  },
  {
    question: "How fast can I get a printer installed?",
    answer:
      "Most orders ship within 2-3 business days, and our team can walk you through setup over a call the same week your printer arrives.",
  },
  {
    question: "What ink types are available?",
    answer:
      "We stock standard, fast-dry, and food-safe cartridges compatible with plastic, glass, cardboard, and metal substrates.",
  },
  {
    question: "What's the total cost of ownership — ink, maintenance, etc.?",
    answer:
      "Beyond the printer itself, expect routine cartridge replacement and an annual maintenance check — most customers spend a fraction of what dedicated industrial systems cost to run.",
  },
];
export default function Homefaq() {
  return <FaqSection heading="Learn before you buy" faqs={FAQS} />;
}
