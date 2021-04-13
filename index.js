const http = require("http");
const fs = require("fs");
const url = "http://jsonplaceholder.typicode.com/posts";

http.get(url, (res) => {
  let content = "";
  res.on("data", (data) => {
    content += data;
  });
  res.on("end", () => {
    fs.writeFile("result/posts.json", content, (err) => {
      if (err) throw err;
      console.log("file successfully saved");
    });
  });
});
