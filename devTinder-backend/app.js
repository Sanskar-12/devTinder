import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(4000, () => {
  console.log(`Server is listening on port ${4000}`);
});
