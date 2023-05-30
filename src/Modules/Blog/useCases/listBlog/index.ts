import { BlogRepository } from "../../repositories/implementations/BlogRepository";
import { ListBlogController } from "./ListBlogController";
import { ListBlogUseCase } from "./ListBlogUseCase";

const blogRepository = BlogRepository.getInstance();

const listBlogUsecase = new ListBlogUseCase(blogRepository);

const listBlogController = new ListBlogController(listBlogUsecase);

export { listBlogController };
