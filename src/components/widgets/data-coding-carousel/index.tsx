import ProductVideoCarousel from "../carousel";

const DATE_CODING_VIDEOS = [
  {
    title: "SNEED-JET® Titan Printer",
    youtubeId: "LewByX7gX_I",
    description:
      "Explore five real-world SNEED-JET® Titan applications, from bright-ink printing to packaging and automated production lines.",
    duration: "2:34",
  },
  {
    title: "SNEED-JET® Titan — Provincial Spirits",
    youtubeId: "LewByX7gX_I",
    description:
      "See a SNEED-JET® Titan printer coding kombucha bottles with white ink for high-contrast date and lot codes.",
    duration: "2:34",
  },
  {
    title: "SNEED-JET® Titan — Fake Meats",
    youtubeId: "l71-IEzfRNQ",
    description:
      "See how Fake Meats integrated the SNEED-JET® Titan into a pouch-filling production line for date coding.",
    duration: "2:34",
  },
  {
    title: "SNEED-JET® Titan — Granola Factory",
    youtubeId: "l71-IEzfRNQ",
    description:
      "Watch a SNEED-JET® Titan integrated with a flow wrapper for clean and precise date-code printing.",
    duration: "2:34",
  },
];

export default function DateCodingVideoSCarousel() {
  return (
    <ProductVideoCarousel
      heading="See how it works in action"
      videos={DATE_CODING_VIDEOS}
    />
  );
}
