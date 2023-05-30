import { Router } from "express";
import nodemailer from 'nodemailer';


const gerencianetRouter = Router();

 gerencianetRouter.post(`/web-hook/bolix/:id`, async (req, res) =>  {
  return res.status(200).json();
});


export { gerencianetRouter };


