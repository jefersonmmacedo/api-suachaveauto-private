// import path from 'path';
// import fs from 'fs';
// import mime from 'mime';
// import aws, { S3 } from 'aws-sdk';

// import multerConfig from "../config/multerConfig"

// class S3Storage {
//   private client: S3;

//   constructor() {
//     this.client = new aws.S3({
//       region: 'sa-east-1',
//     });
//   }

//   async saveFile(filename: string): Promise<void> {
//     const originalPath = path.resolve(multerConfig.directory, filename);
    
//     const ContentType = mime.getType(originalPath);

//     if (!ContentType) {
//       throw new Error('File not found');
//     }

//     const fileContent = await fs.promises.readFile(originalPath);

//     this.client
//       .putObject({
//         Bucket: 'suachave',
//         Key: filename,
//         ACL: 'public-read',
//         Body: fileContent,
//         ContentType,
//       })
//       .promise();

//     await fs.promises.unlink(originalPath);
//   }

//   async deleteFile(filename: string): Promise<void> {
//     await this.client
//       .deleteObject({
//         Bucket: 'suachave',
//         Key: filename,
//       })
//       .promise();
//   }
// }

// export default S3Storage;