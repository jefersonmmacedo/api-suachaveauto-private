import { compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { collections } from "../../../../../services/database.service";
import { AuthenticateTeamUseCase } from "./AuthenticateTeamUseCase";

class AuthenticateTeamController {
  constructor(private authenticateTeamUseCase: AuthenticateTeamUseCase) {
    ("");
  }

  async handle(req: Request, res: Response) {
    const { email, id, password } = req.body;

    this.authenticateTeamUseCase.execute({
      email, id, password,
    }).then((result) => {
      console.log({"Message": "Login efetuado com sucesso"})
      return res.status(201).json(result).send();
    }).catch(error => {
      console.log(error);
      return res.status(500).send()
    })


  }
}

export { AuthenticateTeamController };