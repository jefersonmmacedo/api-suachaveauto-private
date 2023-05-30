import { Request, Response } from "express";
import { collections } from "../../../../../services/database.service";

import { DeleteSquadUseCase } from "./DeleteSquadUseCase";

class DeleteSquadController {
  constructor(private DeleteSquadUseCase: DeleteSquadUseCase) {
    ("");
  }
  async handle(req: Request, res: Response) {
    const id = req.params;
      await collections.squad.deleteOne(id)
      .then((result) => {
      return res.status(201).json(result);
    }).catch(error => {
    console.log(error);
      return res.status(500)
    })

  }
}

export { DeleteSquadController };
