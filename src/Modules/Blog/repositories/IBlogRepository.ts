import { Blog } from "../models/Blog";

interface ICreateBlogDTO {
  id: string;
  title: string;
  slug: string;
  subTitle: string;
  descrition: string;
  image: string;
  author: string;
  category: string;
}

 interface IBlogRepository {
  create({
   title, slug, subTitle, descrition, image, author, category, 
  }: ICreateBlogDTO): void;
  update({
   id, title, slug, subTitle, descrition, image, author, category, 
  }: ICreateBlogDTO): void;
  list();
  delete({id});
}

export { IBlogRepository, ICreateBlogDTO };
