import Button from "@/components/button";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";

const faqs = [
  {
    question: "What happens in a first therapy session?",
    answer:
      "Your first session is an opportunity to meet your therapist and share what's bringing you to therapy. It's a chance to ask questions and see if it feels like a good fit.",
  },
  {
    question: "How long does therapy usually take?",
    answer:
      "The duration is entirely personal and depends on your specific goals and the complexity of what you're facing. Some people find relief in a few months of short-term work, while others benefit from ongoing support over years.",
  },
  {
    question:
      "What's the difference between a therapist, psychologist, psychiatrist, and registered psychotherapist?",
    answer:
      "These titles reflect different training and scopes of practice. Psychiatrists are medical doctors who can prescribe medication. Psychologists hold doctoral degrees and can provide assessments. Registered psychotherapists and therapists focus on talk therapy and emotional support.",
  },
  {
    question: "How often should I attend therapy sessions?",
    answer:
      "Most people start with weekly sessions to build momentum and then move to bi-weekly or monthly as they progress. Your therapist will help you find the right rhythm.",
  },
  {
    question: "Is therapy covered by insurance or benefits plans?",
    answer:
      "Many extended health benefits plans cover therapy with a registered psychotherapist or psychologist. We recommend checking your plan details or contacting your provider directly.",
  },
];

export default function Accordian() {
  return (
    <Container
      width="fullWidth"
      className="bg-ivory px-8 lg:py-16 py-10 items-center justify-center md:px-16 xl:px-[159px]"
    >
      <Container width="pageWidth" className="flex flex-col w-full mx-auto">
        <Typography className="font-fraunces text-teal-700 font-thin lg:leading-[100%] text-center text-[40px] lg:text-[44px] leading-10">
          Frequently asked questions about therapy
        </Typography>

        <Container className="flex flex-col w-full lg:mt-10 mt-5">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-teal-700">
              <input
                type="checkbox"
                id={`faq-${index}`}
                defaultChecked={index === 1}
                className="hidden peer"
              />
              <label
                htmlFor={`faq-${index}`}
                className="flex w-full cursor-pointer items-center justify-between pt-4.5 pb-2 lg:pt-4.5 lg:pb-4.25"
              >
                <span className="font-sans text-[16px] md:text-[18px] font-semibold text-teal-700 pr-8">
                  {faq.question}
                </span>
                <span className="text-teal-700 text-[20px] shrink-0">
                  <span className="show-plus">+</span>
                  <span className="show-minus hidden">−</span>
                </span>
              </label>

              <Container className="pb-6 hidden peer-checked:flex">
                <Typography className="font-sans text-[16px] md:text-[18px] font-normal text-teal-700 max-w-[561px] leading-5.5">
                  {faq.answer}
                </Typography>
              </Container>
            </div>
          ))}
        </Container>

        <div className="flex justify-center mt-12">
          <Button
            variant="primary"
            href="/faqs"
            className="font-fraunces font-light text-[20px] md:text-[20px]"
          >
            See more FAQs here
          </Button>
        </div>
      </Container>
    </Container>
  );
}
