import { Blog } from "../../models/Blog";
import { ICreateBlogDTO, IBlogRepository } from "../IBlogRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class BlogRepository implements IBlogRepository {
  private blog: Blog[];

  private static INSTANCE: BlogRepository;

  private constructor() {
    this.blog = [];
  }

  public static getInstance(): BlogRepository {
    if (!BlogRepository.INSTANCE) {
      BlogRepository.INSTANCE = new BlogRepository();
    }

    return BlogRepository.INSTANCE;
  }

 async create({
  title, slug, subTitle, descrition, image, author, category, 
  }: ICreateBlogDTO) {
    const Notice: Blog = new Blog();
    const _id = uuidv4()
    Object.assign(Blog, {
      _id, id: _id,
      title, slug, subTitle, descrition, image, author, category, 
      created_at: new Date()
    });

    this.blog.push(Notice);
    console.log(Notice)
    await collections.blog.insertOne(Notice).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.blog.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { BlogRepository };
