require("dotenv").config();
const jwt = require("jsonwebtoken");

function authenticationToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) 
    return res.status(401).json({ message: "Token não informado" });
  

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, response) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido" });
    }
    res.locals = response;
    next();
  });
}


module.exports = {authenticationToken: authenticationToken}