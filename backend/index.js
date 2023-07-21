const express = require("express");
const app = express();

// Middleware cho phép đọc dữ liệu gửi tới máy chủ dưới định dạng JSON
app.use(express.json());

app.post("/v1/update", (req, res) => {
  setTimeout(() => {
    res.status(200).json(req.body);
  }, 2000);
});

app.listen("9090", () => {
  console.log("Server đang chạy");
});
