import jwt from "jsonwebtoken"

export const verifyAccess = function (req, res, next) {
try {
        let token = req.headers.authorization
    if (!token) {
        return res.status(403).send("Token is required")
    }
    if (!token.startsWith("Bearer")) {
        return res.status(403).send("Token is not valid")
    }
    token = token.slice(7)
    const decoded = jwt.verify(token,process.env.JWT_KEY)
  console.log(decoded)
  next()
} catch (error) {
    res.send(error.message)
}
}