import axios from "axios";

export default function handler(req, res) {
  let data = JSON.stringify({
    recipients: [
      {
        address: "sppchurch@sppcsa.com",
      },
      { address: "luke@grahamwebworks.com" },
    ],
    content: {
      from: {
        email: "luke@mail.grahamwebworks.com",
        name: "SANPEDROPC.ORG",
      },
      subject: "Message from sanpedropc.org",
      text: `${req.body.name} (${req.body.email}) just sent this message via www.sanpedropc.org:

    ${req.body.message}`,
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.sparkpost.com/api/v1/transmissions",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.SPARKPOST_API_KEY,
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.status(200).json({ status: 200 });
    })
    .catch((error) => {
      console.log(error);
    });
}

// NODEMAILER CODE

// const nodemailer = require("nodemailer");

// export default function handler(req, res) {
//   res.status(200).json({ status: 200 });

//   async function main() {
//     let transporter = nodemailer.createTransport({
//       host: "mail.gandi.net",
//       port: "465",
//       secure: "true",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.EMAIL_PASS
//       }
//     })

//     let info = await transporter.sendMail({
//       from: '"SANPEDROPC.ORG" <donotreply@sanpedropc.org>',
//       to: "sppchurch@sppcsa.com",
//       // to: "luke@grahamwebdesign.com",
//       subject: "Message from sanpedropc.org",
//   text: `${req.body.name} (${req.body.email}) just sent this message via www.sanpedropc.org:

// ${req.body.message}`,
//     });

//     transporter.verify(function (error, success) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Server is ready to take our messages", success);
//       }
//     });
//   }

//   main().catch(console.error);
// }
