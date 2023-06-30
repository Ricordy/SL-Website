import { ReactNode } from "react";

export type PostProps = {
  posts: HygraphPostProps[];
  title: string | ReactNode;
  titleCentered?: boolean;
  buttonMoreText?: string;
  buttonMoreLink?: string;
  buttonMoreTextColor?: string;
  buttonMoreBorderColor?: string;
  buttonMoreBgColor?: string;
  className?: string;
  contentPadding?: boolean;
};
export type PostItemProps = {
  image: string;
  title: string;
  slug: string;
  category?: string;
  children: string;
};

export type HygraphPostProps = {
  id?: Number;
  slug: string;
  basic: {
    title: string;
  };
  shortDescription?: {
    html: string;
  };
  image: {
    url: string;
  };
  postCategory?: string;
  locale?: string;
  description?: {
    html: string;
  };
};
export type PostsProps = {
  posts: HygraphPostProps[];
};
