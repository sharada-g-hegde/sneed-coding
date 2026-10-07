import Container from "@/components/elements/container";

export default function ConnectForm() {
  return (
    <Container className="flex w-full scroll-mt-24 justify-center bg-[#124363]">
      <Container className="flex w-full 2xl:max-w-480 flex-col lg:flex-row">
        <Container className="flex w-full relative lg:w-1/2 xl:pl-16">
          <Container className="flex w-auto absolute inset-0 z-1 bg-[linear-gradient(0deg,rgba(18,67,99,0.81),rgba(18,67,99,0.81)),linear-gradient(270deg,rgba(18,67,99,0)_27.36%,#124363_90%)]"></Container>
          <Container className="flex w-full relative min-h-[28rem] overflow-hidden px-[1.5rem] py-[2.5rem] lg:py-[4rem] xl:px-[4rem]"></Container>
        </Container>
      </Container>
    </Container>
  );
}
