import app from "./app.js";
import https from "http";
const PORT = process.env.PORT || 4000;

const server = https.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
