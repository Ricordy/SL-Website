import { ReactNode } from "react";

export type PostProps = {
  posts: PostItemProps[];
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
  children: ReactNode;
};
