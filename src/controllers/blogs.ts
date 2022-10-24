import { Request, Response } from "express";
import { httpErrorHandler } from "../utils/error.handler";

export const getBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    httpErrorHandler(error, "ERROR_GET_BLOG", res);
  }
};

export const getBlogs = (req: Request, res: Response) => {
  try {
  } catch (error) {
    httpErrorHandler(error, "ERROR_GET_BLOGS", res);
  }
};

export const postBlog = ({ body }: Request, res: Response) => {
  try {
    res.status(200).json(body);
  } catch (error) {
    httpErrorHandler(error, "ERROR_POST_BLOG", res);
  }
};

export const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    httpErrorHandler(error, "ERROR_UPDATE_BLOG", res);
  }
};

export const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    httpErrorHandler(error, "ERROR_DELETE_BLOG", res);
  }
};
