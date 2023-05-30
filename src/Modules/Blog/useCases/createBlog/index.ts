import { BlogRepository } from "../../repositories/implementations/BlogRepository";
import { CreateBlogController } from "./CreateBlogController";
import { CreateBlogUseCase } from "./CreateBlogUseCase";

const blogRepository = BlogRepository.getInstance();

const createBlogUseCase = new CreateBlogUseCase(blogRepository);

const createBlogController = new CreateBlogController(createBlogUseCase);

export { createBlogController };
