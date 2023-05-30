import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { ListBlogUserUseCase } from "./ListBlogUserUseCase";

class ListBlogUserController {
  constructor(private listBlogUseCase: ListBlogUserUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const idCompany = req.params
   await collections.blog.find(idCompany).sort( { created_at: -1 } ).limit(20).toArray(function(err, result){
      if(err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(result)
      }
      return result;
     })

  }
}

export { ListBlogUserController };
