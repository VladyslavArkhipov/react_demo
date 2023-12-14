// server.js
const express = require("express");
const bodyParser = require("body-parser");
const Mailjet = require("node-mailjet");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors()); // Добавляем поддержку CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC || "0cba6a8a1aa99e3c12507df0cac3a582",
  process.env.MJ_APIKEY_PRIVATE || "43e061e2317d086c79804b04c3a6e7d5"
);

app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "arhanich007@gmail.com",
          Name: "Mailjet Pilot",
        },
        To: [
          {
            Email: "arhanich007@gmail.com",
            Name: "Recipient",
          },
        ],
        Subject: "Your email flight plan!",
        TextPart: "Text",
        HTMLPart: `<h3>Dear recipient, welcome to Mailjet!</h3><br />${email}`,
      },
    ],
  });

  try {
    const result = await request;
    console.log(result.body);
    res.status(200).send("Email sent successfully");
  } catch (err) {
    console.error(err.statusCode);
    res.status(500).send("Failed to send email");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});