import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

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

export default function FaqSection() {
  return (
    <section className="w-full bg-white py-16">
      <Container
        width="fullWidth"
        className="mx-auto w-full max-w-325 px-4 lg:px-16 xl:px-0"
      >
        <Container
          width="fullWidth"
          className="grid grid-cols-1 gap-10 xl:grid-cols-[580px_minmax(0,1fr)] lg:gap-20"
        >
          <Container width="fullWidth" className="mt-8">
            <Typography className="m-0 w-full hidden font-outfit lg:flex font-bold leading-[1.1] tracking-[1px] text-[#191B24] lg:text-[52px]">
              Learn before you buy
            </Typography>
            <h2 className="m-0 lg:hidden text-[40px] font-extrabold leading-[1.1] tracking-[-1px] text-[#191B24] lg:text-[48px]">
              FAQ
            </h2>
          </Container>

          <Container width="fullWidth" className="min-w-0 flex-col">
            {FAQS.map((faq, index) => {
              const id = `faq-${index}`;

              return (
                <Container
                  key={id}
                  width="fullWidth"
                  className="
                    min-w-0 flex-col border-b border-[#E7E7EA]
                    [&:has(input:checked)_.faq-icon-line-1]:rotate-45
                    [&:has(input:checked)_.faq-icon-line-2]:rotate-[135deg]
                  "
                >
                  <input
                    type="checkbox"
                    id={id}
                    className="peer sr-only"
                    defaultChecked={index === 0}
                  />

                  <label
                    htmlFor={id}
                    className="flex cursor-pointer select-none items-center justify-between gap-6 py-8"
                  >
                    <span className="text-lg font-outfit font-bold leading-snug text-[#191B24] sm:text-xl">
                      {faq.question}
                    </span>

                    <span className="relative flex h-6 w-6 shrink-0 items-center justify-center text-[#191B24]">
                      <span className="faq-icon-line-1 absolute h-[1.5px] w-3.5 rotate-0 bg-current transition-transform duration-200" />
                      <span className="faq-icon-line-2 absolute h-[1.5px] w-3.5 rotate-90 bg-current transition-transform duration-200" />
                    </span>
                  </label>

                  {/* Collapsible answer */}
                  <Container className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out peer-checked:grid-rows-[1fr]">
                    <Container className="overflow-hidden">
                      <Typography className="m-0 max-w-165 pb-6 text-base leading-[1.6] font-inter text-[16px] lg:text-[16px] text-gray-500">
                        {faq.answer}
                      </Typography>
                    </Container>
                  </Container>
                </Container>
              );
            })}
          </Container>
        </Container>
      </Container>
    </section>
  );
}
