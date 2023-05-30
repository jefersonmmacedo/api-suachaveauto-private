import { Request, Response } from "express";

import { CreateBlogUseCase } from "./CreateBlogUseCase";

class CreateBlogController {
  constructor(private createBlogUseCase: CreateBlogUseCase) {
    ("");
  }

  handle(req: Request, res: Response): Response {
    const { id, title, slug, subTitle, descrition, image, author, category,  } = req.body;

    this.createBlogUseCase.execute({
      id, title, slug, subTitle, descrition, image, author, category, 
    });


    return res.status(201).json();
  }
}

export { CreateBlogController };
