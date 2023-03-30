import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PostItemProps, PostProps } from "../@types/post";
import { cn } from "../lib/utils";

const PostItem: FC<PostItemProps> = ({ image, title, children, url }) => {
  return (
    <div className="flex flex-col gap-6">
      <Image src={image} alt={title} width={328} height={264} />
      <h3 className="text-2xl text-black">{title}</h3>
      {children}
      <Link href={url}>
        <a className="text-primaryGreen text-center uppercase border-b-2 text-xs border-b-primaryGreen py-1 self-start">
          Know more
        </a>
      </Link>
    </div>
  );
};

const Posts: FC<PostProps> = ({
  posts,
  title,
  buttonMoreText,
  buttonMoreLink,
  className,
  contentPadding,
}) => {
  return (
    <section
      className={cn(
        "mx-auto flex flex-col w-full max-w-screen-lg justify-center",
        className,
        contentPadding ? "px-24" : ""
      )}
    >
      <div className="flex w-full items-center justify-between">
        <h3 className="text-black flex-1 text-2xl uppercase">{title}</h3>
        {buttonMoreLink && buttonMoreText && (
          <Link href={buttonMoreLink}>
            <a className="uppercase dark:border-primaryGreen dark:text-primaryGreen dark:hover:text-white dark:hover:bg-primaryGreen hover:text-white hover:bg-primaryGreen border-2 py-1 px-8 text-sm self-start rounded-md text-primaryGreen">
              {buttonMoreText}
            </a>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-3 mt-12 gap-6 w-full justify-between">
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
