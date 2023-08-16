import Link from "next/link";
import Banner from "../../components/Banner";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { classNames } from "../../lib/utils";
import Posts, { PostItem } from "../../components/Posts";
import { PostItemProps } from "../../@types/post";
import { GraphQLClient, gql } from "graphql-request";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";


interface HygraphPostProps {
  id: Number;
  slug: string;
  basic: {
    title: string;
  };
  shortDescription: {
    html: string;
  };
  image: {
    url: string;
  };
  postCategory: string;
  locale: string;
}

interface PostsProps {
  posts: HygraphPostProps[];
}

const Learn = (props: PostsProps) => {
  // let posts: PostItemProps[] = [
  //   {
  //     title: "Lorem Ipsum Dolor sit amet elit eiusmod",
  //     category: "For Beginners",
  //     image: "/posts/post-1.jpg",
  //     slug: "lorem-1",
  //     children: (
  //       <p className="text-ogBlack">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam...
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Lorem Ipsum Dolor sit amet elit eiusmod",
  //     category: "For Beginners",
  //     image: "/posts/post-1.jpg",
  //     slug: "lorem-1",
  //     children: (
  //       <p className="text-ogBlack">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam...
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Lorem Ipsum Dolor sit amet elit eiusmod",
  //     category: "Investment",
  //     image: "/posts/post-2.jpg",
  //     slug: "lorem-2",
  //     children: (
  //       <p className="text-ogBlack">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam...
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Lorem Ipsum Dolor sit amet elit eiusmod",
  //     category: "Investment",
  //     image: "/posts/post-2.jpg",
  //     slug: "lorem-2",
  //     children: (
  //       <p className="text-ogBlack">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam...
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Lorem Ipsum Dolor sit amet elit eiusmod",
  //     category: "cars",
  //     image: "/posts/post-3.jpg",
  //     slug: "lorem-3",
  //     children: (
  //       <p className="text-ogBlack">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam...
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Lorem Ipsum Dolor sit amet elit eiusmod",
  //     category: "cars",
  //     image: "/posts/post-3.jpg",
  //     slug: "lorem-3",
  //     children: (
  //       <p className="text-ogBlack">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam...
  //       </p>
  //     ),
  //   },
  //   {
  //     title: "Lorem Ipsum Dolor sit amet elit eiusmod",
  //     category: "News",
  //     image: "/posts/post-3.jpg",
  //     slug: "lorem-3",
  //     children: (
  //       <p className="text-ogBlack">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam...
  //       </p>
  //     ),
  //   },
  // ];

  let posts = props.posts;

  let [categories] = useState({
    "All Content": posts,
    "For Beginners": posts.filter(
      (post) => post.postCategory == "For Beginners"
    ),
    Investment: posts.filter((post) => post.postCategory == "Investment"),
    Cars: posts.filter((post) => post.postCategory == "cars"),
    News: posts.filter((post) => post.postCategory == "news"),
  });

  const [currentSwiper, setcurrentSwiper] = useState(0);

  return (
    <div className="flex flex-col">
      <section className="flex w-full gap-8 mx-auto  items-center flex-col ">
        <Banner
          className="max-w-screen-lg mt-[52px] hidden md:block"
          title="
            Ready for a Classic Investment?"
          titleClassName="text-white"
          rounded={true}
          height={505}
          subtitle="Do you already have everything you need to start daydreaming? 
So relax and press the pedal."
          linkLabel="Go to app"
          linkUrl="https://beta.somethinglegendary.io"
          image="bg-[url('/banners/learn-header.jpg')]"
          contentPadding={true}
        />
      </section>
      <section className="relative flex w-full max-w-screen-lg mx-auto">
        <div className="rounded-md pt-8 pb-24">
          <Tab.Group>
            <Tab.List className="flex p-1 bg-contactBackground mx-12 rounded-full">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-md uppercase rounded-full font-normal leading-5 ",
                      "  focus:outline-none focus:ring-2",
                      selected
                        ? "bg-primaryGreen ring-white ring-offset-2 ring-offset-primaryGreen/40 text-white dark:text-white"
                        : "text-tabInactive hover:bg-black/5 "
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map(
                (post, idx) =>
                  post!! && (
                    <Tab.Panel
                      key={idx}
                      className={classNames(
                        " bg-white p-3",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-primaryGreen focus:outline-none focus:ring-2"
                      )}
                    >
                      {" "}
                      {(idx !== 0 && (
                        <Posts
                          className="pt-12"
                          posts={post}
                          title={Object.keys(categories).at(idx)}
                          buttonMoreLink={`/learn/${post
                            .at(0)
                            ?.postCategory.toLocaleLowerCase()
                            .split(" ")
                            .join("-")}`}
                          //buttonMoreText="See more"
                          buttonMoreBorderColor="border-black"
                          buttonMoreTextColor="text-black hover:text-white"
                          buttonMoreBgColor="hover:bg-black"
                        />
                      )) || (
                        <section className="text-black flex flex-col mt-[96px] gap-[96px]  ">
                          {Object.values(categories).map(
                            (post, idx) =>
                              post.length > 0 && (
                                <section
                                  key={idx}
                                  className={
                                    "mx-auto flex flex-col gap-16 w-full overflow-hidden  "
                                  }
                                >
                                  <h3
                                    className={`text-black flex-1 font-medium  text-3xl uppercase  `}
                                  >
                                    {Object.keys(categories).at(idx)}
                                  </h3>
                                  <Swiper
                                    modules={[Navigation, Pagination, A11y]}
                                    className="swiper"
                                    spaceBetween={30}
                                    slidesPerView={"auto"}
                                    centeredSlides={true}
                                    pagination={{
                                      clickable: true,
                                      el: `.swiper-pagination-${3}`,
                                    }}
                                    navigation={{
                                      nextEl: `.swiper-next-${3}`,
                                      prevEl: `.swiper-prev-${3}`,
                                    }}
                                    updateOnWindowResize
                                    observer
                                    observeParents
                                    initialSlide={0}
                                    onSlideChange={(swiper) =>
                                      setcurrentSwiper(swiper.activeIndex)
                                    }
                                    // loop={true}
                                  >
                                    <SwiperSlide key={idx} className="">
                                      {post.map((posti, idx) => (
                                        <PostItem
                                          image={posti.image.url}
                                          title={posti.basic.title}
                                          slug={posti.slug}
                                          key={idx}
                                        >
                                          {posti.shortDescription.html}
                                        </PostItem>
                                      ))}
                                    </SwiperSlide>
                                  </Swiper>
                                  <div className="flex gap-6 justify-center items-center  w-full mx-auto">
                                    <div
                                      className={`flex relative cursor-pointer swiper-prev-${3}`}
                                    >
                                      <Image
                                        src="/icons/pagination-prev.svg"
                                        width={20}
                                        height={15}
                                        alt="Previous"
                                      />
                                    </div>
                                    <div
                                      className={`flex justify-center items-center gap-1 text-black swiper-pagination-${3}`}
                                    />
                                    <div
                                      className={`flex relative cursor-pointer swiper-next-${3}`}
                                    >
                                      <Image
                                        src="/icons/pagination-next.svg"
                                        width={20}
                                        height={15}
                                        alt="Next"
                                      />
                                    </div>
                                  </div>
                                </section>
                              )
                          )}
                        </section>
                      )}
                      {/* <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="relative rounded-md p-3">
                        <section className="flex gap-24 w-full my-12">
                          <div className="flex flex-col gap-6 items-start justify-center">
                            {post.content}
                          </div>
                        </section>
                      </li>
                    ))}
                  </ul> */}
                    </Tab.Panel>
                  )
              )}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Learn;

export async function getStaticProps({ locale, params }) {
  const hygraph = new GraphQLClient(process.env.HYGRAPH_READ_ONLY_KEY, {
    headers: {
      Authorization: process.env.HYGRAPH_BEARER,
    },
  });

  const { posts }: PostsProps = await hygraph.request(
    gql`
      query MyQuery {
        posts {
          id
          slug
          basic {
            title
          }
          shortDescription {
            html
          }
          image {
            url
          }
          postCategory
          locale
        }
      }
    `
  );
  return {
    props: {
      posts,
    },
  };
}
