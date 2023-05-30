import { BlogRepository } from "../../repositories/implementations/BlogRepository";
import { ListBlogUserController } from "./ListBlogUserController";
import { ListBlogUserUseCase } from "./ListBlogUserUseCase";

const blogRepository = BlogRepository.getInstance();

const listBlogUserUsecase = new ListBlogUserUseCase(blogRepository);

const listBlogUserController = new ListBlogUserController(listBlogUserUsecase);

export { listBlogUserController };
