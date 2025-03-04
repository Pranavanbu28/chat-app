import React from "react";

const GenderComponent = ({ onGenderChange, selectedGender }) => {
	return (
		<div className="flex mt-2">
			<div className="form-control">
				<label className="label gap-2 cursor-pointer">
					<span className="label-text">Male</span>
					<input
						type="checkbox"
						checked={selectedGender === "male"}
						onChange={() => onGenderChange("male")}
						className="checkbox border-yellow-100"
					/>
				</label>
			</div>
			<div className="form-control">
				<label className="label gap-2 cursor-pointer">
					<span className="label-text">Female</span>
					<input
						type="checkbox"
						className="checkbox border-yellow-100"
						checked={selectedGender === "female"}
						onChange={() => onGenderChange("female")}
					/>
				</label>
			</div>
		</div>
	);
};

export default GenderComponent;
//starter code

// import React from "react";

// const GenderComponent = () => {
// 	return (
// 		<div className="flex mt-2">
// 			<div className="form-control">
// 				<label className="label gap-2 cursor-pointer">
// 					<span className="label-text">Male</span>
// 					<input type="checkbox" className="checkbox border-yellow-100" />
// 				</label>
// 			</div>
// 			<div className="form-control">
// 				<label className="label gap-2 cursor-pointer">
// 					<span className="label-text">Female</span>
// 					<input type="checkbox" className="checkbox border-yellow-100" />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };

// export default GenderComponent;
