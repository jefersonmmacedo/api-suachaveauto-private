import { Router } from "express";
import nodemailer from 'nodemailer';
import axios from 'axios';
import apiFipe from "../../Service/apiFipe";


const fipeRoutes = Router();

 fipeRoutes.post("/", async (req, res) =>  {

   const {placa} = req.body;
   const data = {
    placa,
    token: "86213E6E8364AD67212B3B16CC245675EEC7248AF02E50E03E1759ED6F9B44A0"
   }

  //  console.log(data);
   
await axios.post("https://api.placafipe.xyz/getplacafipe", data).then((result) => {
    return res.status(201).json(result.data);
  }).catch(error => {
    return res.status(500);
  })


});

export { fipeRoutes };




