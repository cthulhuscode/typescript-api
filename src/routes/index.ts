import { Router } from "express";
import { readdirSync } from "fs";
import { logger } from "../middleware/logger";

const PATH_ROUTER = `${__dirname}`;

const router = Router();
router.use(logger); // Log the request

/**
 * Get rid of extension in file
 * items.ts -> items
 */
const cleanFileName = (fileName: string) => {
  return fileName.split(".").shift();
};

/**
 * Function that will read or scan
 * all files that exist in a folder
 */
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    // Dynamic import
    import(`./${cleanName}`).then((routerModule) => {
      router.use(`/${cleanName}`, routerModule.router);
    });
  }
});

export { router };

/**
 * All this code helps to dynamycally
 * charge all the routes.
 */
