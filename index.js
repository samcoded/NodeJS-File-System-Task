const http = require("http");
const fs = require("fs");

//api url
const url = "http://jsonplaceholder.typicode.com/posts";

//fetch data from api
http
  .get(url, (res) => {
    //initialize variable
    let content = "";
    res.on("data", (data) => {
      //append incoming data to variable in streams
      content += data;
    });
    res.on("end", () => {
      //write data to file
      fs.writeFile("result/posts.json", content, (err) => {
        if (err) throw err;
        console.log("file successfully saved");
      });
    });
  })
  .on("error", (err) => {
    if (err) console.log("Error: ", err.message);
  });
