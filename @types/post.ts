import { ReactNode } from "react";
import { classNames } from "../lib/utils";

export type PostProps = {
  posts: PostItemProps[];
  title: string | ReactNode;
  buttonMoreText?: string;
  buttonMoreLink?: string;
  className?: string;
  contentPadding?: boolean;
};
export type PostItemProps = {
  image: string;
  title: string;
  category?: string;
  children: ReactNode;
  url: string;
};
