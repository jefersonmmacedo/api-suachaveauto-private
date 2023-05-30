import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";
dotenv.config(); 

// const cert = fs.readFileSync(
//   path.resolve(__dirname, `../../certs/${process.env.GN_CERT_PROD}`)
// )

// console.log(cert.toString('utf8'))

// fs.readFile(path.resolve(__dirname, `../../certs/${process.env.GN_CERT_PROD}`), 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })

export const GNOptions = {
    sandbox: false,
    client_id: process.env.GN_CLIENT_ID_PROD,
    client_secret: process.env.GN_CLIENT_SECRET_PROD,
    certificate: process.env.GN_CERT_WRITE_PROD,
}