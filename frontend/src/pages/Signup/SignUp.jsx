import React, { useState } from "react";
import GenderComponent from "./GenderComponent";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});
	const { loading, signUp } = useSignup();
	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(inputs);
		await signUp(inputs);
	};

	const onGenderChange = (gender) => {
		setInputs({ ...inputs, gender });
	};
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Signup
					<span className="text-yellow-300 ml-2">ChatApp</span>
				</h1>

				<form className="mt-2" onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Full Name</span>
						</label>
						<input
							type="text"
							placeholder="Enter Full name"
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
							className="w-full input input-bordered h-10"
						/>
					</div>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
							placeholder="Enter Username"
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
							className="w-full input input-bordered h-10"
						/>
					</div>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="Enter password"
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
							className="w-full input input-bordered h-10"
						/>
					</div>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Confirm password</span>
						</label>
						<input
							type="password"
							placeholder="Confirm password"
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({ ...inputs, confirmPassword: e.target.value })
							}
							className="w-full input input-bordered h-10"
						/>
					</div>
					<GenderComponent
						onGenderChange={onGenderChange}
						selectedGender={inputs.gender}
					/>
					<div className="mt-1 justify-between">
						<button className="btn btn-sm mt-2 w-40" disabled={loading}>
							{loading ? (
								<span className="loading loading-spinner loading-xs"></span>
							) : (
								"SignUp"
							)}
						</button>
						<Link
							to="/login"
							className="ml-3 text-sm hover:underline hover:text-yellow-300 mt-3 inline-block"
						>
							Already have an account?
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;

// starter code
// import React from "react";
// import GenderComponent from "./GenderComponent";

// const SignUp = () => {
// 	return (
// 		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
// 			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
// 				<h1 className="text-3xl font-semibold text-center text-gray-300">
// 					Login
// 					<span className="text-yellow-300 ml-2">ChatApp</span>
// 				</h1>

// 				<form className="mt-2">
// 					<div>
// 						<label className="label p-2">
// 							<span className="text-base label-text">Full Name</span>
// 						</label>
// 						<input
// 							type="text"
// 							placeholder="Enter Full name"
// 							className="w-full input input-bordered h-10"
// 						/>
// 					</div>
// 					<div>
// 						<label className="label p-2">
// 							<span className="text-base label-text">Username</span>
// 						</label>
// 						<input
// 							type="text"
// 							placeholder="Enter Username"
// 							className="w-full input input-bordered h-10"
// 						/>
// 					</div>
// 					<div>
// 						<label className="label p-2">
// 							<span className="text-base label-text">Password</span>
// 						</label>
// 						<input
// 							type="password"
// 							placeholder="Enter password"
// 							className="w-full input input-bordered h-10"
// 						/>
// 					</div>
// 					<div>
// 						<label className="label p-2">
// 							<span className="text-base label-text">Confirm password</span>
// 						</label>
// 						<input
// 							type="password"
// 							placeholder="Confirm password"
// 							className="w-full input input-bordered h-10"
// 						/>
// 					</div>
// 					<GenderComponent />
// 					<div className="mt-1 justify-between">
// 						<button className="btn btn-sm mt-2 w-40">Signup</button>
// 						<a
// 							href="#"
// 							className="ml-3 text-sm hover:underline hover:text-yellow-300 mt-3 ml-1 inline-block"
// 						>
// 							Already have an account?
// 						</a>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default SignUp;
