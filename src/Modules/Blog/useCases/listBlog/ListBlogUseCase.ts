import { collections } from "../../../../../services/database.service";
import { Blog } from "../../models/Blog";
import { IBlogRepository } from "../../repositories/IBlogRepository";

class ListBlogUseCase {
  constructor(private BlogRepository: IBlogRepository) {
    " ";
  }

  async execute() {
   const Blog = await collections.blog.find({});
   const BlogAll = Blog.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(BlogAll)
        }
  }

export { ListBlogUseCase };
