import { Router } from "express";
import { listBlogController } from "../../Modules/Blog/useCases/listBlog";
import { listBlogUserController } from "../../Modules/Blog/useCases/listBlogUser";
import { createBlogController } from "../../Modules/Blog/useCases/createBlog";


const BlogRouter = Router();

BlogRouter.post("/", (req, res) => {
  return createBlogController.handle(req, res);
});
BlogRouter.get("/", (req, res) => {
  return listBlogController.handle(req, res);
});
BlogRouter.get("/company/:idCompany", (req, res) => {
  return listBlogUserController.handle(req, res);
});



export { BlogRouter };
