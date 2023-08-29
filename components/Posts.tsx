"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PostItemProps, PostProps } from "../@types/post";
import { cn } from "../lib/utils";
import DOMPurify from "isomorphic-dompurify";
import { useBreakpoint } from "~/hooks/useBreakpoints";
import Carousel from "./Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

export const PostItem: FC<PostItemProps> = ({
  image,
  title,
  children,
  slug,
}) => {
  const purifiedChildren = () => ({
    __html: DOMPurify.sanitize(children as string),
  });

  return (
    <div className="flex flex-col gap-8 w-80 md:w-full relative  ">
      <Image
        src={image}
        alt={title}
        width={328}
        height={264}
        className="w-full rounded-md"
      />
      <div className="flex flex-col w-full gap-2">
        <h3 className="text-2xl text-black text-left">{title}</h3>
        <div
          className="text-white text-left"
          dangerouslySetInnerHTML={purifiedChildren()}
        ></div>

        <Link href={`/learn/${slug}`}>
          <a className="text-primaryGreen hidden md:block pt-2 text-center uppercase border-b-2 text-xs border-b-primaryGreen py-1 self-start">
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
  maxPosts,
}) => {
  const { isAboveMd } = useBreakpoint("md");

  return (
    <section
      className={cn(
        "mx-auto flex flex-col w-full max-w-screen-lg justify-center",
        className,
        contentPadding ? "px-24" : ""
      )}
    >
      <div className="flex w-full pb-[72px] items-center relative justify-between ">
        <h3
          className={`text-black flex font-medium  text-3xl uppercase ${
            titleCentered ? "text-center" : ""
          }`}
        >
          <div className=" absolute w-full ">{title}</div>

          {buttonMoreLink && buttonMoreText && (
            <Link href={buttonMoreLink}>
              <a
                className={cn(
                  "uppercase hidden md:block  border-2 py-1 px-8 font-medium text-sm absolute right-0 rounded-md ",
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

      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-6 w-full justify-between">
          {posts &&
            posts.map((post, idx) => (
              <div key={idx}>
                {maxPosts && idx < maxPosts && (
                  <PostItem
                    key={post.slug}
                    title={post.basic?.title}
                    image={post.image?.url}
                    slug={post.slug}
                  >
                    {post.shortDescription?.html}
                  </PostItem>
                )}
                {!maxPosts && (
                  <PostItem
                    key={post.slug}
                    title={post.basic?.title}
                    image={post.image?.url}
                    slug={post.slug}
                  >
                    {post.shortDescription?.html}
                  </PostItem>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col w-full md:hidden gap-8">
        <div className="flex md:flex-row flex-col gap-12">
          <div className="flex swiper-wrapper ">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              className="swiper w-full"
              spaceBetween={30}
              slidesPerView="auto"
              centeredSlides={true}
              pagination={{
                clickable: true,
                el: `.swiper-pagination-6000`,
              }}
              navigation={{
                nextEl: `.swiper-next-6000`,
                prevEl: `.swiper-prev-6000`,
              }}
              updateOnWindowResize
              observer
              observeParents
              initialSlide={0}
              // loop={true}
            >
              {posts.map((post, index) => (
                <SwiperSlide key={index} className="w-full">
                  <PostItem
                    key={post.slug}
                    title={post.basic?.title}
                    image={post.image?.url}
                    slug={post.slug}
                  >
                    {post.shortDescription?.html}
                  </PostItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="flex gap-6 justify-center items-center mx-auto">
          <div className={`flex relative swiper-prev-6000`}>
            <Image
              src="/icons/pagination-prev.svg"
              width={20}
              height={15}
              alt="Previous"
            />
          </div>
          <div
            className={`flex justify-center items-center gap-1 text-black swiper-pagination-6000`}
          />
          <div className={`flex relative swiper-next-6000`}>
            <Image
              src="/icons/pagination-next.svg"
              width={20}
              height={15}
              alt="Next"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
