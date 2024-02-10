// proxy-server.js
import express from "express";
import cors from "cors";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/:url", async (req, res) => {
  const url = req.params.url; // Retrieve URL from query parameters

  try {
    const headers = {
      "Content-Type": "application/json",
      "X-KEY": "a6610b49dfdb8dd347de2e2b2b1af918",
    };
    const response = await axios.post(
      "https://api.prospeo.io/linkedin-email-finder",
      {
        url: url,
      },
      {
        headers: headers,
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
