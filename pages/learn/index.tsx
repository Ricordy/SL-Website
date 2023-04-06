import Link from "next/link";
import Banner from "../../components/Banner";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { classNames } from "../../lib/utils";
import Posts from "../../components/Posts";
import { PostItemProps } from "../../@types/post";

const Learn = () => {
  let posts: PostItemProps[] = [
    {
      title: "Lorem Ipsum Dolor sit amet elit eiusmod",
      category: "For Beginners",
      image: "/posts/post-1.jpg",
      slug: "lorem-1",
      children: (
        <p className="text-ogBlack">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
        </p>
      ),
    },
  ];
  let [categories] = useState({
    "All Content": posts,
    "For Beginners": posts.filter((post) => post.category == "For Beginners"),
    Investment: posts.filter((post) => post.category == "Investment"),
    Cars: posts.filter((post) => post.category == "Cars"),
    News: posts.filter((post) => post.category == "News"),
  });
  return (
    <div className="flex flex-col">
      <section className="flex w-full gap-12 mx-auto  items-center flex-col ">
        <Banner
          className="max-w-screen-lg"
          title="
            Ready for a Classic Investment?"
          titleClassName="text-white"
          subtitle="Do you already have everything you need to start daydreaming? 
So relax and press the pedal."
          linkLabel="Go to app"
          linkUrl="https://beta.somethinglegendary.io"
          image="bg-[url('/banners/ready-for-a-classic-investment.jpg')]"
          contentPadding={true}
        />
      </section>
      <section className="relative flex w-full max-w-screen-lg mx-auto">
        <div className="rounded-md py-12">
          <Tab.Group>
            <Tab.List className="flex p-1 bg-black/10 mx-12 rounded-full">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-md uppercase rounded-full font-medium leading-5 text-black",
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
              {Object.values(categories).map((post, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    " bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-primaryGreen focus:outline-none focus:ring-2"
                  )}
                >
                  <Posts
                    className="pt-12"
                    posts={post}
                    title={Object.keys(categories).at(idx)}
                    buttonMoreLink={`/learn/${post
                      .at(0)
                      .category.toLocaleLowerCase()
                      .split(" ")
                      .join("-")}`}
                    buttonMoreText="See more"
                  />
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
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Learn;
