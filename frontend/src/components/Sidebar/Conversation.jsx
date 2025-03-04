import React from "react";

const Conversation = () => {
	return (
		<>
			<div className="flex gap-2 items-center hover:bg-cyan-600 roundered p-2 cursor-pointer">
				<div className="avatar online">
					<div className="w-12 rounded-full">
						<img src="https://gravatar.com/avatar/392dcd4d659a97572c7f58f877160ca3?s=400&d=robohash&r=x" />
					</div>
				</div>
				<div className="flex flex-col flex-1">
					<div className="flex gap-3 justify-between">
						<p className="font-bold text-gray-200">John doe</p>
						<span className="text-xl">🐐</span>
					</div>
				</div>
			</div>
			<div className="divider my-0 py-0 h-1"></div>
		</>
	);
};

export default Conversation;
