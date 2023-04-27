import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PostItemProps, PostProps } from "../@types/post";
import { cn } from "../lib/utils";

const PostItem: FC<PostItemProps> = ({ image, title, children, slug }) => {
  return (
    <div className="flex flex-col gap-8 relative">
      <Image src={image} alt={title} width={328} height={264} />
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-black">{title}</h3>
        {children}
        <Link href={`/learn/${slug}`}>
          <a className="text-primaryGreen pt-2 text-center uppercase border-b-2 text-xs border-b-primaryGreen py-1 self-start">
            Know more
          </a>
        </Link>
      </div>
      <a
        href={`/learn/${slug}`}
        className={cn(
          "absolute inset-0 rounded-md",
          "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
        )}
      />
    </div>
  );
};

const Posts: FC<PostProps> = ({
  posts,
  title,
  titleCentered = false,
  buttonMoreText,
  buttonMoreLink,
  buttonMoreTextColor,
  buttonMoreBorderColor,
  buttonMoreBgColor,
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
      <div className="flex w-full pb-[72px] items-center relative justify-between">
        <h3
          className={`text-black flex-1 font-medium  text-3xl uppercase ${
            titleCentered ? "text-center" : ""
          }`}
        >
          {title}
          {buttonMoreLink && buttonMoreText && (
            <Link href={buttonMoreLink}>
              <a
                className={cn(
                  "uppercase  border-2 py-1 px-8 font-medium text-sm absolute right-0 rounded-md ",
                  buttonMoreTextColor
                    ? buttonMoreTextColor
                    : "text-primaryGreen hover:text-white hover:bg-primaryGreen",
                  buttonMoreBorderColor
                    ? buttonMoreBorderColor
                    : "border-primaryGreen hover:bg-primaryGreen hover:text-white",
                  buttonMoreBgColor
                    ? buttonMoreBgColor
                    : "bg-white hover:bg-primaryGreen"
                )}
              >
                {buttonMoreText}
              </a>
            </Link>
          )}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full justify-between">
        {posts &&
          posts.map((post) => (
            <PostItem
              key={post.slug}
              title={post.title}
              image={post.image}
              slug={post.slug}
            >
              {post.children}
            </PostItem>
          ))}
      </div>
    </section>
  );
};

export default Posts;
