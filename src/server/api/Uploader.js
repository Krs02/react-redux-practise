import express from "express";
const Uploader = express.Router();

Uploader.post("/saveImage", (req, res) => {
  const fileName = req.files.myFile.name;
  const path = __dirname + "/images/" + fileName;

  image.mv(path, (error) => {
    if (error) {
      console.error(error);
      res.writeHead(500, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify({ status: "error", message: error }));
      return;
    }

    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ status: "success", path: "/img/houses/" + fileName }));
  });
});

export default Uploader;
