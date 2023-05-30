import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListBlogUseCase } from "./ListBlogUseCase";

class ListBlogController {
  constructor(private listBlogUseCase: ListBlogUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
   await collections.blog.find().sort( { created_at: -1 } ).limit(20).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListBlogController };
