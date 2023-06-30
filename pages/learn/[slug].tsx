import { useRouter } from "next/router";
import Image from "next/image";
import Posts from "../../components/Posts";
import { PostItemProps } from "../../@types/post";
import Link from "next/link";
import { GraphQLClient, gql } from "graphql-request";
import { GetServerSideProps } from "next";
import DOMPurify from "isomorphic-dompurify";

interface PostProps {
  post: {
    id: Number;
    slug: string;
    description: {
      html: string;
    };
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
  };
}

// let posts: PostItemProps[] = [
//   {
//     title: "Lorem Ipsum Dolor sit amet elit eiusmod",
//     category: "For Beginners",
//     image: "/posts/post-1.jpg",
//     slug: "lorem-1",
//     children: (
//       <p className="text-ogBlack">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam...
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
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam...
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
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam...
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
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam...
//       </p>
//     ),
//   },
//   {
//     title: "Lorem Ipsum Dolor sit amet elit eiusmod",
//     category: "Cars",
//     image: "/posts/post-3.jpg",
//     slug: "lorem-3",
//     children: (
//       <p className="text-ogBlack">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam...
//       </p>
//     ),
//   },
//   {
//     title: "Lorem Ipsum Dolor sit amet elit eiusmod",
//     category: "Cars",
//     image: "/posts/post-3.jpg",
//     slug: "lorem-3",
//     children: (
//       <p className="text-ogBlack">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam...
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
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam...
//       </p>
//     ),
//   },
// ];

const purifiedChildren = (children: string) => ({
  __html: DOMPurify.sanitize(children),
});

const LearnDetail = ({ post }: PostProps) => {
  const router = useRouter();
  const { slug, category, title, image } = router.query;

  //const [post] = posts.filter((post) => post.slug == slug);
  return (
    <section className="w-full flex-col flex gap-8 mx-auto max-w-screen-lg">
      <div className="flex gap-8 pt-8">
        <Link href="/learn">
          <a className="text-secondaryGrey flex items-center gap-6">
            <Image
              src="/icons/arrow-left.svg"
              width={34}
              height={24}
              alt="Arrow left"
            />
            <div className="flex gap-3 ">
              <span className="uppercase">Learn More</span>
              <h2 className="text-secondaryGrey flex gap-3 text-base">
                <span>|</span>
                <span className="uppercase">{post.postCategory}</span>
              </h2>
            </div>
          </a>
        </Link>
      </div>
      <div className="flex mb-24 w-full max-w-screen-lg relative min-h-[394px]">
        <Image
          src={post.image.url as string}
          alt="Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-black text-3xl pb-12 text-center">
        {post.basic.title}
      </h1>
      {post && (
        <div
          dangerouslySetInnerHTML={purifiedChildren(post.description.html)}
        ></div>
      )}
      {/* <Posts
        className="pb-24 pt-[132px]"
        title="Learn more"
        titleCentered={true}
        posts={posts.slice(0, 3)}
        buttonMoreLink="/learn"
        buttonMoreText="See more"
        buttonMoreBorderColor="border-black"
        buttonMoreTextColor="text-black hover:text-white"
        buttonMoreBgColor="hover:bg-black"
      /> */}
    </section>
  );
};

export default LearnDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const hygraph = new GraphQLClient(process.env.HYGRAPH_READ_ONLY_KEY, {
    headers: {
      Authorization: process.env.HYGRAPH_BEARER,
    },
  });

  const { post }: PostProps = await hygraph.request(
    gql`
      query MyQuery {
        post (
          where: { slug: "${slug}" }
        ) {
          id
          slug
          description {
            html
          }
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
      post,
    },
  };
};
