import { useRouter } from "next/router";
import Image from "next/image";
import Posts from "../../components/Posts";
import { PostItemProps } from "../../@types/post";
import Link from "next/link";

let posts: PostItemProps[] = [
  {
    title: "Lorem Ipsum Dolor sit amet elit eiusmod",
    category: "For Beginners",
    image: "/posts/post-1.jpg",
    slug: "lorem-1",
    children: (
      <p className="text-ogBlack">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam...
      </p>
    ),
  },
  {
    title: "Lorem Ipsum Dolor sit amet elit eiusmod",
    category: "For Beginners",
    image: "/posts/post-1.jpg",
    slug: "lorem-1",
    children: (
      <p className="text-ogBlack">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam...
      </p>
    ),
  },
  {
    title: "Lorem Ipsum Dolor sit amet elit eiusmod",
    category: "Investment",
    image: "/posts/post-2.jpg",
    slug: "lorem-2",
    children: (
      <p className="text-ogBlack">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam...
      </p>
    ),
  },
  {
    title: "Lorem Ipsum Dolor sit amet elit eiusmod",
    category: "Investment",
    image: "/posts/post-2.jpg",
    slug: "lorem-2",
    children: (
      <p className="text-ogBlack">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam...
      </p>
    ),
  },
  {
    title: "Lorem Ipsum Dolor sit amet elit eiusmod",
    category: "Cars",
    image: "/posts/post-3.jpg",
    slug: "lorem-3",
    children: (
      <p className="text-ogBlack">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam...
      </p>
    ),
  },
  {
    title: "Lorem Ipsum Dolor sit amet elit eiusmod",
    category: "Cars",
    image: "/posts/post-3.jpg",
    slug: "lorem-3",
    children: (
      <p className="text-ogBlack">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam...
      </p>
    ),
  },
  {
    title: "Lorem Ipsum Dolor sit amet elit eiusmod",
    category: "News",
    image: "/posts/post-3.jpg",
    slug: "lorem-3",
    children: (
      <p className="text-ogBlack">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam...
      </p>
    ),
  },
];

const LearnDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [post] = posts.filter((post) => post.slug == slug);
  return (
    <section className="w-full mx-auto max-w-screen-lg">
      <div className="flex gap-3 pt-6">
        <Link href="/learn">
          <a className="text-secondaryGrey flex items-center gap-6">
            <Image
              src="/icons/arrow-left.svg"
              width={34}
              height={24}
              alt="Arrow left"
            />
            <span className="uppercase">Learn More</span>
          </a>
        </Link>
        <h2 className="text-secondaryGrey flex gap-3 text-base">
          <span>|</span> <span className="uppercase">{post?.category}</span>
        </h2>
      </div>
      <div className="flex my-12 w-full max-w-screen-lg relative min-h-[394px]">
        <Image src={post?.image} alt="Image" layout="fill" objectFit="cover" />
      </div>

      <h1 className="text-black text-3xl pb-12 text-center">{post?.title}</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur
      </p>
      <Posts
        className="py-24"
        title="Know more"
        titleCentered={true}
        posts={posts.slice(0, 3)}
        buttonMoreLink="/learn"
        buttonMoreText="See more"
      />
    </section>
  );
};

export default LearnDetail;
