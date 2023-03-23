import connectDB from "../_db/connect-db";
import { User } from "../_db/models/User";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const filter = {};
        if (req.query.username && req.query.password) {
          filter.username = req.query.username;
        } else {
          res.json({error:"Access denied"})
        }
        const user = await User.findOne(filter);
        if (!user) {
          res.status(401).json({error: "Username or password is wrong"});
        } else {
          res.status(200).json(user);
        }
      } catch (error) {
        res.status(500).json({error: "something went wrong"});
      }
      break;

    default:
      return res.status(400).json({ error: "method not supported" });
  }
}

export default connectDB(handler);
