import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization") //How does front end set the token in the header
    if (!token) {
      return res.status(403).send("Access Denied")
    }
    if (token.startsWith("Bearer ")) {
      //How does front end put "Bearer " infront of the token
      token = token.slice(7, token.length).trimLeft()
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET)
    req.user = verified
    next()
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
