const app = require("./app");
const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(
    `Click link to go to api: http://localhost:${PORT}\nServer Running on port: ${PORT}`
  );
});
