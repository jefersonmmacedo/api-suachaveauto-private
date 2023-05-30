import { IBlogRepository } from "../../repositories/IBlogRepository";

interface IRequest {
  id: string;
  title: string;
  slug: string;
  subTitle: string;
  descrition: string;
  image: string;
  author: string;
  category: string;
}


class CreateBlogUseCase {
  constructor(private BlogRepository: IBlogRepository) {
    " ";
  }

  execute({ id, title, slug, subTitle, descrition, image, author, category,  }: IRequest): void {
    this.BlogRepository.create({
      id, title, slug, subTitle, descrition, image, author, category, 
    });
  }
}

export { CreateBlogUseCase };
