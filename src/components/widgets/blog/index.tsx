import Media from "@/components/elements/media";
import Container from "@/components/elements/container";
import Typography from "@/components/elements/typography";
import Link from "@/components/elements/link";

const BLOG_POSTS = [
  {
    image: "/images/blog-1.jpg",
    tags: ["Success Story", "#KeepCodingSimple"],
    title:
      "From Installation to Performance: A Seamless Transition with the SNEED-J...",
    excerpt:
      "For over 40 years, Union Grove Saw & Knife has been a trusted partner for industries that rely on precision. From primary and secondary wood to...",
    author: "Alexa Marmolejo",
    date: "Jul 24, 2026 7:15:23 AM",
  },
  {
    image: "/images/blog-2.jpg",
    tags: ["Success Story", "#KeepCodingSimple"],
    title:
      "From Installation to Performance: A Seamless Transition with the SNEED-J...",
    excerpt:
      "For over 40 years, Union Grove Saw & Knife has been a trusted partner for industries that rely on precision. From primary and secondary wood to...",
    author: "Alexa Marmolejo",
    date: "Jul 24, 2026 7:15:23 AM",
  },
  {
    image: "/images/blog-3.jpg",
    tags: ["Success Story", "#KeepCodingSimple"],
    title:
      "From Installation to Performance: A Seamless Transition with the SNEED-J...",
    excerpt:
      "For over 40 years, Union Grove Saw & Knife has been a trusted partner for industries that rely on precision. From primary and secondary wood to...",
    author: "Alexa Marmolejo",
    date: "Jul 24, 2026 7:15:23 AM",
  },
];

export default function BlogsMobile() {
  return (
    <Container className="flex-col bg-white px-4 sm:px-6 py-10 lg:hidden">
      <Typography className="m-0 mb-6 font-outfit text-center text-[26px] font-bold leading-tight text-[#24232D]">
        Our latest blogs
      </Typography>

      <Container className="flex-col gap-8">
        {BLOG_POSTS.map((post, index) => (
          <Container key={index} className="flex-col gap-3">
            <Container className="relative h-47.5 w-full overflow-hidden rounded-[18px] bg-gray-200">
              <Media
                src={post.image}
                alt={post.title}
                fill
                className="absolute inset-0 h-full w-full object-cover"
              />
            </Container>

            <Container className="items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#24232D]/15 px-3 py-1 text-xs font-medium text-[#24232D]"
                >
                  {tag}
                </span>
              ))}
            </Container>

            <Typography className="m-0 font-outfit text-[18px] font-bold leading-snug text-[#24232D]">
              {post.title}
            </Typography>

            <Typography className="m-0 text-[14px] font-inter leading-snug text-[#5A5A5A]">
              {post.excerpt}
            </Typography>

            <Typography className="m-0 text-[14px] font-inter leading-snug text-[#8A8A8A]">
              Posted by {post.author}
              <br />
              on {post.date}
            </Typography>
          </Container>
        ))}
      </Container>

      <Link
        href="/blog"
        variant="Link"
        className="mt-8 w-full font-outfit justify-center cursor-pointer rounded-full border border-[#9B1B32] bg-white py-3.5 text-[15px] font-semibold text-[#9B1B32] transition-colors hover:bg-[#9B1B32] hover:text-white"
      >
        View all articles
      </Link>
    </Container>
  );
}
