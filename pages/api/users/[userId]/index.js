import mongoose from "mongoose";
import connectDB from "../../_db/connect-db";
import { User } from "../../_db/models/User";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const user = await User.findById(req.query.userId);
        if (user) {
          return res.status(200).json(user);
        } else {
          return res.status(500).json({ error: "user not found" });
        }
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
      break;

      case "DELETE":
            try {
                const deletedUser = await User.findByIdAndDelete(req.query.userId);
                return res.status(200).json({ message: `User ${deletedUser.username} deleted` });
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
      
    default:
      return res.status(400).json({ error: "method not supported" });
  }
}

export default connectDB(handler);
