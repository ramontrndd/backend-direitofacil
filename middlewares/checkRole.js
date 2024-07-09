require("dotenv").config();

function checkRole(req, res, next) {
  if (res.locals.role === process.env.USER) {
 return res.status(403).json({ message: "Você não tem permissão para acessar este recurso" });
  } else {
    next();
  }
}

module.exports = { checkRole: checkRole };
