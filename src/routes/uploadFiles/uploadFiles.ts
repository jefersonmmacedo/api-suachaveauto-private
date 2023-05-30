// import { Router } from "express";
// import multer from "multer";
// import multerConfig from "../../config/multerConfig"

// const uploadFilesRouter = Router();

// import DeleteImagesService from '../../Service/DeleteImagesService';

//  uploadFilesRouter.post("/upload", multer(multerConfig).single("file"), async (req, res) =>  {
//     return res.status(200).json(req.file)
// });

//  uploadFilesRouter.delete("/upload/:filename", multer(multerConfig).single("file"), async (req, res) =>  {
//   const { filename } = req.params;

//   const deleteImagesService = new DeleteImagesService();

//   await deleteImagesService.execute(filename);

//   return res.status(200);
// });

// export { uploadFilesRouter };




