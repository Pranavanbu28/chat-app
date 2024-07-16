import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import genTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
	try {
		const { fullName, username, gender, password, confirmPassword } = req.body;
		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords do not match" });
		}
		const user = await User.findOne({ username });
		if (user) {
			return res.status(400).json({ error: "user already exists" });
		}
		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const newUser = new User({
			fullName,
			username,
			gender,
			password: hashedPassword,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});
		if (newUser) {
			genTokenAndSetCookie(newUser._id, res);
			await newUser.save();
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				gender: newUser.gender,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Not able to create a new user" });
		}
	} catch (error) {
		console.log(`signup controller error: ${error.message}`);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordSame = bcrypt.compare(password, user?.password || "");
		if (!user || !isPasswordSame) {
			res.send(400).json({ error: "Incorrect Username or Password" });
		}
		genTokenAndSetCookie(user._id, res);
		res.status(201).json({
			_id: user._id,
			fullName: user.fullName,
			gender: user.gender,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log(`login controller error: ${error.message}`);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "logged out successfully" });
	} catch (error) {
		console.log(`logout controller error: ${error.message}`);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
