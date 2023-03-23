import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

type PostItemProps = {
  image: string;
  title: string;
  children: ReactNode;
  url: string;
};
const PostItem: FC<PostItemProps> = ({ image, title, children, url }) => {
  return (
    <div className="flex flex-col gap-6 max-w-[328px]">
      <Image src={image} alt={title} width={328} height={264} />
      <h3 className="font-bold text-3xl text-black">{title}</h3>
      {children}
      <Link href={url}>
        <a className="text-primaryGreen text-center uppercase border-b-2 font-semibold text-xs border-b-primaryGreen py-1 self-start">
          Know more
        </a>
      </Link>
    </div>
  );
};
const Posts = () => {
  const posts: PostItemProps[] = [
    {
      title: "Lorem Ipsum Dolor sit amet elit eiusmod",
      image: "/posts/post-1.jpg",
      url: "/post/lorem-1",
      children: (
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
        </p>
      ),
    },
    {
      title: "Lorem Ipsum Dolor sit amet elit eiusmod",
      image: "/posts/post-2.jpg",
      url: "/post/lorem-2",
      children: (
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
        </p>
      ),
    },
    {
      title: "Lorem Ipsum Dolor sit amet elit eiusmod",
      image: "/posts/post-3.jpg",
      url: "/post/lorem-3",
      children: (
        <p className="text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
        </p>
      ),
    },
  ];
  return (
    <section className="mx-auto flex flex-col w-full max-w-7xl justify-center p-24">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-black flex-1 text-center font-semibold text-3xl uppercase">
          Learn More
        </h3>
        <Link href="/try">
          <a className="text-black text-center uppercase border-2 font-semibold text-xs border-black rounded-md px-4 py-1 self-center">
            See More
          </a>
        </Link>
      </div>
      <div className="flex mt-24 gap-6 w-full justify-between">
        {posts &&
          posts.map((post) => (
            <PostItem
              key={post.url}
              title={post.title}
              image={post.image}
              url={post.url}
            >
              {post.children}
            </PostItem>
          ))}
      </div>
    </section>
  );
};

export default Posts;
