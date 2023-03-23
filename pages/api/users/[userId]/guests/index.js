import connectDB from "@/pages/api/_db/connect-db";
import { User } from "@/pages/api/_db/models/User";

async function handler(req, res) {
    switch (req.method) {
        case "GET":
            try {
                const filter = {};
                const guests = await User.find(filter);
                res.status(200).json(guests);
            }
            catch (error) {
                res.status(500).json({error: error.message})
            }
            break;
        case "POST":
            try {
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    partner: req.body.partner,
                    username: req.body.username,
                    password: req.body.password,
                    isAdmin: false,
                    isGuest: true,
        });
        console.log(newUser);
        await newUser.save();
        res.status(200).json(newUser);
        console.log(newUser);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

      break;
      
      
        break;
        default:
            return res.status(400).json({ error: "method not supported" });
        }
}

export default connectDB(handler);