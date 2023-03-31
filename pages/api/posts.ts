import type { NextApiRequest, NextApiResponse } from "next";
import { PostItemProps } from "../../@types/post";
import { ReactNode } from "react";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostItemProps[]>
) {
  res.status(200).json([]);
}
