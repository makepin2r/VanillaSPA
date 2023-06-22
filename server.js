const express = require("express");
const path = require("path");

const app = express();

// 경로의 앞에 /static이 있을 경우 평소의 경로 그대로 처리 (index.html로 다이렉팅되지 않음)
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// 어떤 경로에서도 index.html로 이동
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

app.listen(process.env.PORT || 5000, () => console.log("Server running..."));
