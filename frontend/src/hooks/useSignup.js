import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const validateForm = ({
	fullName,
	username,
	password,
	confirmPassword,
	gender,
}) => {
	console.log(
		"inside validation",
		fullName,
		username,
		password,
		confirmPassword,
		gender
	);
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please enter all required fields");
		return false;
	}
	if (password !== confirmPassword) {
		toast.error("Passwords don't match");
		return false;
	}
	if (password.length < 6) {
		toast.error("Password have must have more than 6 characters");
		return false;
	}
	console.log("out");
	return true;
};

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
	const signUp = async ({
		fullName,
		username,
		password,
		confirmPassword,
		gender,
	}) => {
		const success = validateForm({
			fullName,
			username,
			password,
			confirmPassword,
			gender,
		});
		console.log("after success");

		if (!success) {
			return;
		}
		setLoading(true);
		try {
			console.log("try");
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					fullName,
					username,
					password,
					confirmPassword,
					gender,
				}),
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
			console.log(data);
		} catch (e) {
			toast.error(e.message);
		} finally {
			setLoading(false);
		}
	};
	return { signUp, loading };
};

export default useSignup;
